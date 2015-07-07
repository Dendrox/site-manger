var app = app || {};

app.OrdersView = Backbone.View.extend({
	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'reset', this.render );
		$('#items').empty();
	},

	render : function(){
		$('#header').empty().append('<button id="backToList"><i class="fa fa-arrow-left"></i></button>');
		
		$('.itemsContainer').empty();

		this.collection.each(function( item ){

			if(item.attributes.status === 'Ordered'){
				this.renderBook( item );
			}

		}, this);
	},

	renderBook : function( item ){
		var orderView = new app.OrderView({
			model : item
		});
		$('#items').append( orderView.render().el )
		$('.order').css({display:'none'})

	}
})