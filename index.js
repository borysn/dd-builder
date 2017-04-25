#!/usr/bin/env node

/**
 * dd-builder
 * author: borysn
 * license: MIT
 *
 */
const fs = require('fs');
const script = require('commander');
const chalk = require('chalk');

// dd-builder
(function() {

  /**
   * script version
   */
  script.version('1.0.0');

  /**
   * run script
   */
  script.parse(process.argv);

})();
