var app = app || {};

app.Library = Backbone.Collection.extend({
	initialize : function(){
		this.on('all', function(e) {console.log('Items event:' + e); });
		this.on('request', function(){this.url = 'blah'})
	},
	apikey : '?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3',
	model : app.Book,
	url : function(){
		return 'https://api.mongolab.com/api/1/databases/site_manager/collections/items'+this.apikey
	}
});