export var DEBUG = global.DEBUG = false;
export var WATCHING = global.WATCHING = false;

export var DIR = global.DIR = __dirname;

export var R = global.R = {
  src: './src/',
  dest: './dest/',
};

export var P = global.P = {
  src: {
    root:   `${R.src}`,
    php:    `${R.src}php/`,
    py:     `${R.src}py/`,
    js:     `${R.src}js/`,

    html:   `${R.src}html/`,
    stylus: `${R.src}stylus/`,
    pug:    `${R.src}pug/`,
    css:    `${R.src}css/`,

    public: `${R.src}public/`,
    },

  dest: {
    root:   `${R.dest}`,
    php:    `${R.dest}php/`,
    py:     `${R.dest}py/`,
    js:     `${R.dest}js/`,

    html:   `${R.dest}html/`,
    stylus: `${R.dest}css/`,
    pug:    `${R.dest}pug/`,
    css:    `${R.dest}css/`,

    public: `${R.dest}`,
    },
};
