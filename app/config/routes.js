var React = require('react');


var Main = require('../components/Main');
var About = require('../components/About');
var Portfolio = require('../components/Portfolio');
//var Contact = require('../components/Contact');


var Router = require('react-router');
var Route = Router.Route;


var IndexRoute	= Router.IndexRoute;




module.exports = (

	<Route path="/" component={Main}>
	
		<Route path = "about" component={About}/>
		<Route path ="portfolio" component={Portfolio}/>
		
		
		{/*<Route path ="contact" component={Contact}/>*/}
		<IndexRoute component={About}/>
	</Route>

);