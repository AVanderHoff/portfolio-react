var React = require('react');
var Router = require('react-router');
var hangman = require('url?!./assets/images/CARHANGMAN.png');

var Hangman = React.createClass({

render:function(){

return(

<div className = "row">

<div className= "col-md-4">
		
	<a href="http://car-hangman-av.herokuapp.com/" target="_blank" >
	<img className="image" id="hangman" src={hangman} alt="hangman" title="hangman" /> </a>
		<h3> Hangman </h3>
	 
	</div>

</div>






)
}
});

module.exports = Hangman