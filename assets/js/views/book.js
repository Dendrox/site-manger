var app = app || {};

app.BookView = Backbone.View.extend({
	tagName   : 'div',
	className : 'itemsContainer',
	template  : _.template( $('#itemTemplate').html() ),

	events : {
		'click .delete' : 'deleteItem'
	},

	render    : function(){
		$('.date').formatDateTime('mm/dd/y g:ii a');
		this.$el.html( this.template(this.model.toJSON() ));


		return this;

	},

	deleteItem : function(){
		console.log(this.model.attributes.id);
		this.model.destroy();

		this.remove();
	}
});