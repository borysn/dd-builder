/**
 * ddLogger.ts
 * author: borysn
 * license: MIT
 */

import * as log4js from 'log4js'

/**
 * dd-builder logging class, singleton
 */
export class ddLogger {

  // properties
  private static instance: ddLogger
  private logger: any

  /**
   * constructor
   */
  private constructor() {
    log4js.configure('../../config/log4js.json', { reloadSecs: 100 })
    this.logger = log4js.getLogger('clustered')
  }

  /**
   * get instance of ddLogger
   *
   * @returns    instance of ddLogger
   */
  public static getInstance():ddLogger {
    if(!ddLogger) {
      ddLogger.instance = new ddLogger()
    }
    return ddLogger.instance
  }

  /**
   * log info messages
   *
   * @param msg    msg to log
   */
  public info(msg: string) { this.logger.info(msg) }

  /**
   * log error messages
   *
   * @param msg    msg to log
   */
  public error(msg: string) { this.logger.error(msg) }

}
