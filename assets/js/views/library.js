var app = app || {};

app.LibraryView = Backbone.View.extend({
	el : '#items',
	events : {
		'click #gotoform' : 'showForm'
	},

	initialize : function(){
		this.collection = new app.Library();
		this.collection.fetch({reset : true});
		this.listenTo( this.collection, 'add', this.renderBook );
		this.listenTo( this.collection, 'reset', this.render );
	},

	render : function(){
		$('#items').empty();
		$('.itemsContainer').empty();
		this.collection.each(function( item ){
			this.renderBook( item );

		}, this);
		this.$el.append('<button id="gotoform">Add</button>')
	},

	renderBook : function( item ){
		var bookView = new app.BookView({
			model : item
		});
		this.$el.append( bookView.render().el )
		

	},
	showForm : function(e){
		e.preventDefault();
		Backbone.history.navigate('#add',{trigger:true})
	},

	close: function() {		
		this.remove();
		this.unbind();
	}

})