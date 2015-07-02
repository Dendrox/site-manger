var app = app || {};

app.Library = Backbone.Collection.extend({
	model : app.Book,
	url: 'mongodb://Decky84:Dendrox1@ds035517.mongolab.com:35517/site_manager'
});