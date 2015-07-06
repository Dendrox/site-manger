var app = app || {};

app.ItemView = Backbone.View.extend({
	template : _.template($('#itemView').html()),

	events : {
		'click .back' : 'backToList'
	},
	initialize : function(id){
		var self = this;
		this.model = new app.Book();
		this.model.fetch({
			url : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+id.id+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3',

			success : function(response){
				console.log(response.toJSON());
				self.render(response.toJSON());
			}
		})
		
	},
	render : function(model){
		this.$el.html(this.template(model));
		$('#items').empty().append(this.$el)
	},
	backToList : function(){
		Backbone.history.navigate('', {trigger : true})
	}
})