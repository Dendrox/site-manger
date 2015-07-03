var app = app || {};

app.Book = Backbone.Model.extend({
	initialize : function(){
		this.on('all', function(e) {console.log(this.get(this.itemName ) + ' event:' + e); });
	},
	defaults : {
		id         : "",
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
	url : function(id){
		
		
		return 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+this.id.$oid+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3'	
	}
});