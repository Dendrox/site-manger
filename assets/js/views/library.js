var app = app || {};

app.LibraryView = Backbone.View.extend({
	el : '#items',	

	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'add', this.renderBook );
		this.listenTo( this.collection, 'reset', this.render );
		$('#header').empty();
	},

	render : function(){
		$('#header').append('<button id="gotoform">Add</button>');
		$('#items').empty();
		$('.itemsContainer').empty();
		this.collection.each(function( item ){
			this.renderBook( item );

		}, this);
	},

	renderBook : function( item ){
		var bookView = new app.BookView({
			model : item
		});
		this.$el.append( bookView.render().el )
		

	},	

	close: function() {		
		this.remove();
		this.unbind();
	}

})