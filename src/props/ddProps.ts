/**
 * ddProps.ts
 * author: borysn
 * license: MIT
 */

import * as jsy from 'js-yaml';

export abstract class ddProps {

  /**
   * constructor
   *
   * @param file    yaml file containing properties
   */
  constructor(protected validProps: Map<string, Array<string>>) {}

  /**
   * get property value
   *
   * @param prop    target property
   * @returns       target property value(s) as string array
   */
  public getPropValue(prop: string): Array<string> | undefined {
    return this.validProps.get(prop);
  }

}
