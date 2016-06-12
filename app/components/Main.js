var React = require('react');
var Router = require('react-router');


var Main = React.createClass({



 render: function(){
   return (


<div className="container">

				<div className="jumbotron">
			<h2 className="text-center" ><strong>Andrew VanderHoff</strong></h2>

		</div>




		
		<nav className="navbar navbar-default" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					
				</div>
		
				
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li><a href="#about">About</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>


				{this.props.children}



	</div>


   	)


}

});

module.exports = Main;