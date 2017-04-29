/**
 * ddProps.ts
 * author: borysn
 * license: MIT
 */

import * as R from 'ramda'
import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import * as jsonpath from 'jsonpath'

/**
 * dd-builder properties class, singleton
 */
export class ddProps {

  // properties
  private static instance: ddProps
  private static readonly propFiles = ['../config/cmds.yaml']
  private props:Map<string, any>

  /**
   * constructor
   *
   * @param file    yaml file containing properties
   */
  private constructor() {
    this.props = new Map<string, any>()
    this.parseProps()
  }

  /**
   * get dd-builder properties object
   *
   * @returns    dd-builder properties object
   */
  public static getInstance(): ddProps {
    if (!ddProps.instance) {
      ddProps.instance = new ddProps()
    }
    return ddProps.instance
  }

  /**
   * get property value
   *
   * @param prop    target property
   * @returns       target property value(s) as string array, empty array if not found
   */
  public getPropValue(set: string, prop: string): Array<string> {
    // init return
    let value: Array<string> = new Array<string>()

    // attempt to get property value
    if (this.props.has(set)) {
      value = jsonpath.value(this.props.get(set), prop)
    } else {
      // TODO throw exception
    }

    return value
  }

  /**
   * return entire properties map
   *
   * @returns    map containing all properties from files, where keys are file names
   */
  public getPropMap(): Map<string, any> {
    return this.props
  }

  /**
   * get file name `../config/<fileName>.yaml` using string.match
   *
   * @param   file    file path
   * @returns         string containing <fileName>, or empty string if no match
   */
  private getFileName(file: string): string {
    let matchArray = file.match('[^\/\.]+(?=(\.yaml))')
    return matchArray == null ? '' : matchArray[0]
  }

  /**
   * parse yaml properties files
   */
  private parseProps(): void {
    try {
      R.forEach(file => {
        try {
          let config: any = yaml.safeLoad(fs.readFileSync(path.resolve(file), 'utf-9'))
          let json: any = JSON.parse(JSON.stringify(config))
          this.props.set(this.getFileName(file), json)
        } catch(e) {
          console.log(e)
        }
      }, ddProps.propFiles)
    } catch (e) {
      console.log(e)
    }
  }

}
