import gulp from 'gulp';
import gutil from 'gulp-util';

import { Task } from './base';


export class WebpackTask extends Task {
  pipes(pipe) {
    var webpack = require('webpack-stream');

    return super.pipes(pipe).pipe(webpack(
      this.config,
      null,
      this.errorHandler
      ));
  }

  errorHandler(err, stats) {
    if(err) {
      super.errorHandler(err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: true,
    }));
  }
}
