var app = app || {};

app.Library = Backbone.Collection.extend({
	initialize : function(){
		this.on('all', function(e) {console.log('Items event:' + e); });
	},
	model : app.Book,
	url: 'https://api.mongolab.com/api/1/databases/site_manager/collections/items?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3'
});