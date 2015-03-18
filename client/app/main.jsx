/* @flow */

var React = require('react')

var ExampleStage = require('./stage')

module.exports = React.createClass({

  displayName: 'Main',

  render():any {
    return (
      <div>
        <span>Game Goes Here</span>
        <ExampleStage width={600} height={400} xposition={200} />
      </div>
    )
  }

})
