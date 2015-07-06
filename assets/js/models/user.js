var app = app || {};

app.User = new Backbone.Model.extend({
	initialize : function(){
		// whatever
	},
	defaults : {
		userName : '',
		password : '',
	},
	parse : function(response){
		response.id = response._id['$oid'];
		return response;
	}
});