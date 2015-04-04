var React = require('react');
var Header = require('../components/Header.jsx');

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header text='Snapcache' back='true'/>
        Hello World!
      </div>
    );
  }
});

module.exports = HomePage;
