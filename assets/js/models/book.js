var app = app || {};



app.Book = Backbone.Model.extend({
	initialize : function(){
		//this.on('all', function(e) {console.log(this.get(this.itemName ) + ' event:' + e); });
		
	},
	defaults : {
		itemName   : "",
        itemDesc   : "",
        unitSize   : "",
        unitWeight : "",
        quantity   : undefined,
        location   : "",
        otherInfo  : "",
        status     : "Available",
        uploadedBy : "",
        orderedBy  : ""
	},
	parse : function(response){
		response.id = response._id['$oid'];
		return response;
	},
	destroy : function(options){
		var opts = _.extend({url : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+this.id.$oid+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3'}, options || {});
		console.log(options)
		return Backbone.Model.prototype.destroy.call(this,opts);
	}
	
});