import path from 'path';
import notifier from 'node-notifier';
import gutil from 'gulp-util';

import { errorHandler } from '../utils'


export class Task {
  constructor(config) {
    this.config = config || {};
  }

  pipes(pipe) {
    var plumber = require('gulp-plumber');

    pipe = pipe.pipe(plumber({
      errorHandler: this.errorHandler,
    }));

    return pipe;
  }

  errorHandler(err) {
    errorHandler(err);
  }
}
