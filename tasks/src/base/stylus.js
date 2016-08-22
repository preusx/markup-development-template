import gulp from 'gulp';

import { Task } from './base';


export class StylusTask extends Task {
  pipes(pipe) {
    var stylus         = require('gulp-stylus');
    var sourcemaps     = require('gulp-sourcemaps');
    var postcss        = require('gulp-postcss');

    // Useful stuff for docs generation: mdcss[https://github.com/jonathantneal/mdcss]

    return super.pipes(pipe)
      .pipe(sourcemaps.init())
        .pipe(stylus(require('../config/stylus').config))
        .pipe(postcss(require('../config/postcss').config))
      .pipe(sourcemaps.write());
  }
}
