var app = app || {};

app.OrderView = Backbone.View.extend({
	template : _.template($('#orderTemplate').html()),

	events : {
		'click .cancel_order' : 'cancelOrder' 
	},

	initialize : function(id){
		var self = this;
		this.model = new app.Book();
		this.model.fetch({
			url : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+id.id+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3',
			success : function(response){
				alert('success');
				self.render(response.toJSON());
			}
		});

	},
	render : function(model){
		console.log(this.$el)
		this.$el.html(this.template(model));
		$('#items').empty().append(this.$el);
	},
	cancelOrder : function(e){
		e.preventDefault();
		this.model.set({status : 'Available'});
		this.model.save(undefined, {
			url : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+this.model.id+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3',
			success : function(response){
				alert('order cancelled')
				Backbone.history.navigate('', {trigger:true})
			}
		});
		
	}
})