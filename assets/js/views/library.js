var app = app || {};

app.LibraryView = Backbone.View.extend({
	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'reset', this.render );
		console.error('new lib view')
		$('#items').empty();
	},

	render : function(){
		console.log(this.collection)
		$('#header').append('<button id="gotoform">Add</button>');
		
		$('.itemsContainer').empty();

		this.collection.each(function( item ){
			this.renderBook( item );

		}, this);
	},

	renderBook : function( item ){
		var bookView = new app.BookView({
			model : item
		});
		$('#items').append( bookView.render().el )
		

	}
})