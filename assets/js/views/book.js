var app = app || {};

app.BookView = Backbone.View.extend({
	tagName   : 'div',
	className : 'itemsContainer',
	template  : _.template( $('#itemTemplate').html() ),

	events : {
		'click .order' : 'orderItem',
		'click .view'   : 'viewItem',
		'click .info_up'   : 'infoUp',
		'click .info_down'   : 'infoDown',

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
	infoUp : function(e){
		e.preventDefault();
		var self = this;
		$(this.el).find('.info_text_container').animate({height : '130px'}, function(){
			$(self.el).find('.info_up').css({display : 'none'})
			$(self.el).find('.info_down').css({display : 'block'})

		});		
	},
	infoDown : function(e){
		e.preventDefault();
		var self = this;
		$(this.el).find('.info_text_container').animate({height : '0'}, function(){
			$(self.el).find('.info_up').css({display : 'block'})
			$(self.el).find('.info_down').css({display : 'none'})
		});	
	}
});