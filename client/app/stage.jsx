/* @flow */
/* globals Text: true */

var React = require('react')
var PIXI = require('pixi.js')
var {Stage, TilingSprite, Text} = require('react-pixi')

module.exports = React.createClass({

  displayName: 'ExampleStage',

  render() {
    var {width, height, xposition} = this.props
    return (
      <Stage width={width} height={height}>
        <TilingSprite image={'img/bg_castle.png'} width={width} height={height} key="1" />
        <Text text="Vector text" x={xposition} y={10} style={{font: '40px Times'}} anchor={new PIXI.Point(0.5, 0)} key="2" />
      </Stage>
    )
  }

})
