var app = app || {};

app.Users = Backbone.Collection.extend({
	apikey : '?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3',
	model : app.User,
	url : function(){
		return 'https://api.mongolab.com/api/1/databases/site_manager/collections/users'+this.apikey
	}
});