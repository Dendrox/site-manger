var app = app || {};

app.OrdersView = Backbone.View.extend({
	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'reset', this.render );
		$('#items').empty();
	},

	render : function(){
		$('#header').append('<button id="gotoform">Add</button>');
		
		$('.itemsContainer').empty();

		this.collection.each(function( item ){

			if(item.attributes.status === 'Ordered'){
				this.renderBook( item );
			}

		}, this);
	},

	renderBook : function( item ){
		var bookView = new app.BookView({
			model : item
		});
		$('#items').append( bookView.render().el )
		$('.order').css({display:'none'})

	}
})