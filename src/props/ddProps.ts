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
  private static readonly propFiles = ['config/cmds.yaml']
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
  public getPropValue(prop: string): string[] {
    // init return
    let value: string[] = new Array<string>()

    // get prop set
    let propSet: string = this.getPropSet(prop)

    // attempt to get property value
    if (this.props.has(propSet)) {
      value = jsonpath.value(this.props.get(propSet), prop)
      if(!value) {
        // TODO throw exception
      }
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
   * infer properties set from prop string
   *
   * @param prop    string containing target property
   * @returns       string containig property set name
   */
  private getPropSet(prop: string): string {
    // return val
    let propSet = prop.split('.')[1]
    // valid prop set
    if(!this.props.has(propSet)) {
      // TODO throw exception
    }
    // return
    return propSet
  }
  /**
   * get fileName `<project root>/config/<fileName>.yaml` using string.match
   *
   * @param   file    file path
   * @returns         string containing file name, or empty string if no match
   */
  private getFileName(file: string): string {
    let matchArray = file.match('[^\/\.]+(?=(\.yaml))')
    return matchArray === null ? '' : matchArray[0]
  }

  /**
   * parse yaml properties files
   */
  private parseProps(): void {
    // process each config file
    R.forEach(file => {
      try {
        // load yaml config
        let config: any = yaml.safeLoad(fs.readFileSync(path.resolve(file), 'utf-8'))
        // store config in map with filename as the key
        this.props.set(this.getFileName(file), config)
      } catch(e) {
        // log config file load error
        console.log(e)
      }
    }, ddProps.propFiles)
  }

}
