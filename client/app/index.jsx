/* @flow */

require('babel/polyfill')

var React = require('react')
var PIXI = require('pixi.js')

var Main = require('./main')

function render() {
  React.render(<Main/>, document.body)
}

var fontloader = new PIXI.BitmapFontLoader('fonts/comic_neue_angular_bold.fnt')
fontloader.on('loaded', render)
fontloader.load()
