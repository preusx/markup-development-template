import gulp from 'gulp';
import watch from 'gulp-watch';
import batch from 'gulp-batch';
import { P as p, R as r } from './tasks/paths';

import {
  Task,
  PugTask,
  CopyTask,
  StylusTask,
  WebpackTask,
  } from './tasks/base';


let paths = {
  stylus: [
    `${p.src.stylus}style.styl`,
    ],
  stylus_watch: `${p.src.stylus}**/*.styl`,

  pug: [
    `${p.src.pug}**/*.pug`,
    `!${p.src.pug}**/_*.pug`,
    ],

  html: [
    `${p.src.pug}html/**/*.pug`,
    `!${p.src.pug}html/**/_*.pug`,
    ],
  html_watch: `${r.dest.html}**/*.pug`,
  html_dest: `${r.dest.html}`,

  copy: [
    `${p.src.public}**/*.*`,
    ],

  js: [
    `${p.src.js}**/*.js`,
    ],
};

let browserSync = require('browser-sync').create();

gulp.task('stylus', () => {
  return (new StylusTask())
    .pipes(gulp.src(paths.stylus))
    .pipe(gulp.dest(p.dest.stylus));
});

gulp.task('html', () => {
  return (new PugTask({
        dest: paths.html_dest,
        basedir: p.src.pug + 'html/',
        ext: '.html'
      }))
    .pipes(gulp.src(paths.html))
    .pipe(gulp.dest(paths.html_dest));
});

gulp.task('copy', () => {
  return (new CopyTask())
    .pipes(gulp.src(paths.copy))
    .pipe(gulp.dest(p.dest.public));
});


gulp.task('watch', () => {
  browserSync.init({
    server: p.dest.root,
    open: false,
  });

  watch(paths.stylus_watch, batch((events, done) => gulp.start('stylus', done) ));
  watch(paths.html_watch, batch((events, done) => gulp.start('html', done) ));
  watch(paths.copy, batch((events, done) => gulp.start('copy', done) ));
});

gulp.task('default', ['watch', 'copy']);
