/* @flow */
/* globals Text: true */

var React = require('react')
var {Sprite} = require('react-pixi')

var LEFT = 37
var RIGHT = 39
var SPEED = 5

/*::
type GameState = {
  x: number;
}
*/

module.exports = React.createClass({

  displayName: 'Player',

  getInitialState():GameState {
    return {
      x: 200
    }
  },

  componentDidMount():void {
    document.addEventListener('keydown', this.keyPress)
  },

  keyPress(e:KeyboardEvent):void {
    if (e.keyCode === LEFT) {
      this.setState({x: this.state.x - SPEED })
    } else if (e.keyCode === RIGHT) {
      this.setState({x: this.state.x + SPEED })
    }
  },

  render():ReactElement {
    var {x} = this.state
    var {height} = this.props
    return (
      <Sprite image={'img/wizard.png'} x={x} y={height - 110} key="3" />
    )
  }

})
