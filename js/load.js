$(document).ready(function() {

	gridlock([{
		cols:     5,
		columns:  180,
		gutters:  25,
		unit:     'px',
		color:    'purple',
		opacity:  .2
	}]);

	$("#page-index #masthead h1 a").lettering();
	$("#masthead h2 a").lettering();

});
