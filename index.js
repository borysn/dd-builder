#!/usr/bin/env node

/**
 * dd-builder
 * author: borysn
 * license: MIT
 *
 */
const script = require('commander');
const build = require('./src/cmd/ddBuild.js');
const help = require('./src/cmd/ddHelp.js');

// dd-builder
(function() {

  /**
   * script version
   */
  script.version('1.0.0');

  /**
   * help
   */
  script
    .command('help <cmd>')
    .alias('h')
    .action((cmd) => {
      let h = new help();
      h.exec(cmd);
    });

  /**
   * build
   */
  script
    .command('build <dir>')
    .alias('b')
    .action((dir) => {
      let b = new build();
      b.exec(dir);
    });

  /**
   * run script
   */
  script.parse(process.argv);

})();
