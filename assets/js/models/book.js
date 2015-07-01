var app = app || {};

app.Book = Backbone.Model.extend({

	defaults : {
		itemName   : "",
        itemDesc   : "",
        unitSize   : "",
        unitWeight : "",
        quantity   : undefined,
        location   : ""
	},
	parse : function(response){
		response.id = response._id;
		return response;
	}	
});