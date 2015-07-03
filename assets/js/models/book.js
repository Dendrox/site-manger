var app = app || {};

app.Book = Backbone.Model.extend({
	initialize : function(){
		this.on('all', function(e) {console.log(this.get(this.itemName ) + ' event:' + e); });
	},
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
	},
	urlRoot : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/:id?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3'	
});