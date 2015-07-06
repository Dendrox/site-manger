var app = app || {};

app.LibraryView = Backbone.View.extend({
	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'reset', this.render );
		console.error('new lib view')
		$('#items').empty();
		$('#login').css({display : 'none'});
		console.log('logged in as user '+app.login)
	},

	render : function(){
		$('#header').append('<button id="side_menu">Menu</button><button id="my_orders">Orders</button><button id="gotoform">Add</button>');
		
		$('.itemsContainer').empty();

		this.collection.each(function( item ){

			if(item.attributes.status === 'Available'){
				this.renderBook( item );
			}

		}, this);
	},

	renderBook : function( item ){
		var bookView = new app.BookView({
			model : item
		});
		$('#items').append( bookView.render().el )
		

	}
})