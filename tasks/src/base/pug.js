import gulp from 'gulp';

import { Task } from './base';


export class PugTask extends Task {
  pipes(pipe) {
    var pug              = require('gulp-pug');
    var pugCompiler      = require('pug');
    var changed          = require('gulp-changed');
    var rename           = require('gulp-rename');

    return super.pipes(pipe)
      .pipe(changed(this.config.dest, {}))
      .pipe(pug({
        pretty: this.config.pretty || true,
        pug: pugCompiler,
        basedir: this.config.basedir || '',
      }))
      .pipe(rename({
        extname: this.config.ext || '.html',
      }));
  }
}
