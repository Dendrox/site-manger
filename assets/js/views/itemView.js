var app = app || {};

app.ItemView = Backbone.View.extend({
	template : _.template($('#itemView').html()),

	events : {
		'click .back' : 'backToList'
	},
	initialize : function(id){

		console.log('inside')
		this.render();
	},
	render : function(){
		this.$el.html(this.template(model.toJSON() ));
		$('#items').empty().append(this.$el)
	},
	backToList : function(){
		Backbone.history.navigate('', {trigger : true})
	}
})