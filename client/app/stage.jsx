/* @flow */
/* globals Text: true */

var React = require('react')
var {Stage, TilingSprite} = require('react-pixi')

var Player = require('./player')

module.exports = React.createClass({

  displayName: 'ExampleStage',

  render() {
    var {width, height} = this.props
    return (
      <Stage width={width} height={height}>
        <TilingSprite image={'img/bg_castle.png'} width={width} height={height} key="1" />
        <Player height={height}/>
      </Stage>
    )
  }

})
