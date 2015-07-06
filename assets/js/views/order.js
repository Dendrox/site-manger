var app = app || {};

app.OrderView = Backbone.View.extend({
	tagName   : 'div',
	className : 'itemsContainer',
	template  : _.template( $('#orderTemplate').html() ),

	events : {
		'click .order' : 'orderItem',
		'click .view'   : 'viewItem',
		'click .cancel_order' : 'cancelOrder' 
	},

	render    : function(){
		console.log(this.model);
		this.$el.html( this.template(this.model.toJSON() ));


		return this;

	},

	orderItem : function(e){
		e.preventDefault();
		var warning = confirm('Are you sure you want to Order ' + this.model.attributes.quantity 
			+ ' ' + this.model.attributes.itemName + ' ' + this.model.attributes.itemDesc);

		if(warning === true){
			this.model.set({status : 'Ordered'});
			this.model.save(undefined,{
				url : 'https://api.mongolab.com/api/1/databases/site_manager/collections/items/'+this.model.id+'?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3', 
				success : function(response){
					console.log(response)
					Backbone.history.navigate('order/'+response.id, {trigger:true})
				}
			});
			
		}
		
	},
	viewItem : function(){
		Backbone.history.navigate('item/'+this.model.id, {trigger:true})
		console.log('viewitem')
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