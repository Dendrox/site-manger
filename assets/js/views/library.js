var app = app || {};

app.LibraryView = Backbone.View.extend({
	initialize : function(){
		this.collection = new app.Library();
		var menu = new app.MenuView();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'reset', this.render );
		console.error('new lib view')
		$('#items').empty();
		$('#login').css({display : 'none'});
		console.log('logged in as user '+app.login)
	},

	render : function(){

		$('#header').empty().append('<button id="side_menu"><i class="fa fa-ellipsis-v"></i></button><button id="my_orders"><i class="fa fa-archive"></i></button><button id="gotoform"><i class="fa fa-plus"></i></button>');
		
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