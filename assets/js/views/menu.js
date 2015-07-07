var app = app || {};

app.MenuView = Backbone.View.extend({
	template : _.template($('#menu').html()),

	initialize : function(){
		this.render();
		console.log('menu view')
	},
	render : function(){
		this.$el.html(this.template());
		$('#menu_div').empty().append(this.$el);
	}
})