var app = app || {};

app.BookView = Backbone.View.extend({
	tagName   : 'div',
	className : 'itemsContainer',
	template  : _.template( $('#itemTemplate').html() ),

	events : {
		'click .delete' : 'deleteItem',
		'click .view'   : 'viewItem'
	},

	render    : function(){
		$('.date').formatDateTime('mm/dd/y g:ii a');
		this.$el.html( this.template(this.model.toJSON() ));


		return this;

	},

	deleteItem : function(){
		this.model.destroy();

		this.remove();
	},
	viewItem : function(){
		Backbone.history.navigate('item/:'+this.model.id.$oid, {trigger:true})
		console.log('viewitem')
	}
});