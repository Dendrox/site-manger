var app = app || {};

app.BookView = Backbone.View.extend({
	tagName   : 'div',
	className : 'itemsContainer',
	template  : _.template( $('#itemTemplate').html() ),

	events : {
		'click .order' : 'orderItem',
		'click .view'   : 'viewItem'
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
	}
});