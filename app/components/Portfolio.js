var React = require('react');
var Router = require('react-router');
var hangman = require('url?!./assets/images/CARHANGMAN.png');
var starwars = require('url?!./assets/images/star-wars-rpg.png');
var triviagame = require('url?!./assets/images/trivia-game.png');
var giffysearch = require('url?!./assets/images/giffy-search.png');
var trainstation = require('url?!./assets/images/trains.png');
var friendfinder = require('url?!./assets/images/friend-finder.png');
var burgerseq = require('url?!./assets/images/burgerseq.png');
var burger = require('url?!./assets/images/burgerseq.png');
var proofdatabase = require('url?!./assets/images/proofdatabase.png');
var poemcomber = require('url?!./assets/images/Poemcomber.png')
var scrapingpft = require('url?!./assets/images/scrapingpft.png');
var reactnytimes = require('url?!./assets/images/react-ny-times.png')
var Button = require('react-bootstrap/lib/Button');
var Modal = require('react-bootstrap/lib/Modal');



var Portfolio = React.createClass({






getInitialState:function(){
return{show:false};
},

open:function(){
	this.setState({show:true})

},


close:function(){
	this.setState({show:false})

},

render:function(){

var right = {float:"right"}


return(

		

		<div className="row">
			<div className="col-lg-12">

			{/*}	<Button onClick={this.open}>hello 
				

				</Button> */}

				

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong>Portfolio</strong></h1>
					</div>
					<div className="panel-body">

{/*///////////////////////////////////////////////////////////////////////////////

<Modal show={this.state.show} bsSize="large" onHide={this.close}>
	
	<Modal.Header closeButton>
		<h3> Hangman </h3>
	</Modal.Header>


	<Modal.Body>

	<div style={right}  >
	
	
	<a href="http://car-hangman-av.herokuapp.com/" target="_blank" >
	<img className="image" id="hangman" src={hangman} alt="hangman" title="hangman" /> </a>
		
	 
	</div>  

	<div >
		<p> basic hangman game with a car brands theme </p>

	</div>



	</Modal.Body>

</Modal>
/////////////////////////////////////////////////////////////////////////////////*/}

  <div className= "col-md-4">
	
	
	<a href="https://poemcomber.herokuapp.com/" target="_blank" >
	<img className="image" id="poemcomber" src={poemcomber} alt="poemcomber" title="poemcomber" /> </a>
		<h3> PoemComber </h3>
	 
	</div> 

	<div className= "col-md-4">
	
	
	<a href="http://proof-database.herokuapp.com/" target="_blank" >
	<img className="image" id="proofdatabase" src={proofdatabase} alt="proofdatabase" title="proofdatabase" /> </a>
		<h3> Proof Database </h3>
	 
	</div> 

		<div className= "col-md-4">
	
	
	<a href="http://react-ny-times-av.herokuapp.com/" target="_blank" >
	<img className="image" id="reactnytimes" src={reactnytimes} alt="reactnytimes" title="reactnytimes" /> </a>
		<h3> NY Times Search React </h3>
	 
	</div> 








	<div className= "col-md-4">
	
	
	<a href="http://scrapingpft.herokuapp.com/" target="_blank" >
	<img className="image" id="scrapingpft" src={scrapingpft} alt="scrapingpft" title="scrapingpft" /> </a>
		<h3> Scraping Pro Football Talk </h3>
	 
	</div> 


		 	 <div className= "col-md-4">
		<a href="http://burgerseq.herokuapp.com/" target="_blank" >
	<img id="burger-seq" src={burgerseq} alt="burger-seq" title="burger-seq" /> </a>
		<h3> Burger Stand Sequelize </h3>
	 </div>

		 	 <div className= "col-md-4">
		<a href="http://burger-av.herokuapp.com/" target="_blank" >
	<img id="burger" src={burger} alt="burger" title="burger" /> </a>
		<h3> Burger Stand  </h3>
	 </div>

	 	 <div className= "col-md-4">
		<a href="http://friend-finder-av.herokuapp.com/" target="_blank" >
	<img id="friend-finder" src={friendfinder} alt="friend-finder" title="friend-finder" /> </a>
		<h3>Friend Finder </h3>
	 </div>

	 	 <div className= "col-md-4">
		<a href="http://train-station-av.herokuapp.com/" target="_blank" >
	<img id="train-station" src={trainstation} alt="train-station" title="train-station" /> </a>
		<h3>Train Station </h3>
	 </div>

	 		<div className= "col-md-4">
		<a href="http://giffy-search-av.herokuapp.com/" target="_blank" >
	<img id="giffy-search" src={giffysearch} alt="giffy-search" title="giffy-search" /> </a>
		<h3>Giffy Search </h3>
	 </div>

	<div className= "col-md-4">
			
	<a href="http://trivia-game-av.herokuapp.com/" target="_blank" >
	<img id="trivia-game" src={triviagame} alt="trivia-game" title="trivia-game" /> </a>

	<h3> Trivia Game </h3>
	</div>


		<div className= "col-md-4">
	<a href="http://star-wars-rpg-av.herokuapp.com/" target="_blank" >
	<img id="rpg-game" src={starwars} alt="rpg-game" title="rpg-game" /> </a>

		<h3> RPG Game </h3>
	</div>

	




	<div className= "col-md-4">
	
	
	<a href="http://car-hangman-av.herokuapp.com/" target="_blank" >
	<img className="image" id="hangman" src={hangman} alt="hangman" title="hangman" /> </a>
		<h3> Hangman </h3>
	 
	</div>  


















</div>
</div>
</div>
</div>






























)
}

});


module.exports = Portfolio;


