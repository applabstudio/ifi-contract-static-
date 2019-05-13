/**
 * Browser Sync & webpack middlewares
 */
const browserSync = require('browser-sync');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./config');
const mode = require('./lib/mode');
const webpackConfig = require('./webpack.config');

const webpackCompiler = webpack(webpackConfig);

const browserSyncConfig = {
  logPrefix: 'gulp-webpack-starter',
  port: config.browserSync.port,
  ui: {
    port: config.browserSync.port + 1,
  },
};

browserSync.init({
  server: {
    //Middleware paths are relative to the base directory
    baseDir: 'dist'
  },
  middleware: function(req,res,next) {
    if (req.url === '/contatti') {
      req.url = '/contatti.html';
    } else if (req.url === '/hdesigner-detail') {
      req.url = '/designer-detail.html';
    } else if (req.url === '/designer') {
      req.url = '/designer.html';
    } else if (req.url === '/downlaod') {
      req.url = '/download.html';
    } else if (req.url === '/ifi-contract') {
      req.url = '/ifi-contract.html';
    } else if (req.url === '/index') {
      req.url = '/index.html';
    } else if (req.url === '/lavora-con-noi') {
      req.url = '/lavora-con-noi.html';
    } else if (req.url === '/press') {
      req.url = '/press.html';
    } else if (req.url === '/progetti') {
      req.url = '/html/progetti.html';
    } else if (req.url === '/project-detail') {
      req.url = '/project-detail.html';
    }
    return next();
  }
});


/**
 * Use Proxy
 * else create Server
 */
if (config.browserSync.proxy.target) {
  browserSyncConfig.proxy = {
    target: config.browserSync.proxy.target,
  };
  browserSyncConfig.files = config.browserSync.proxy.files;
} else {
  browserSyncConfig.server = {
    baseDir: config.root.dist,
  };
}

if (!(mode.mode === 'production')) {
  browserSyncConfig.middleware = [
    webpackDevMiddleware(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true,
      },
    }),
    webpackHotMiddleware(webpackCompiler),
  ];
}

gulp.task('liveReload', () => {
  browserSync.init(browserSyncConfig);
});
