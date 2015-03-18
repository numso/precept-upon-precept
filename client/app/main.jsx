/* @flow */

var React = require('react')

var ExampleStage = require('./stage')

module.exports = React.createClass({

  displayName: 'Main',

  render():ReactElement {
    return (
      <div>
        <ExampleStage width={window.innerWidth} height={window.innerHeight} />
      </div>
    )
  }

})
