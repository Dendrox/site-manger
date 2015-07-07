var app = app || {};

$(function(){
	
	app.menuState = false;
	app.loggedInUserId;
	var router = new app.Router();
	Backbone.history.start();

})