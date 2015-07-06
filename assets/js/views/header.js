var app = app || {};

app.Header = Backbone.View.extend({
	tagName : 'div',
	el     : '#header',
	button : '<button id="gotoform">Add</button>',
	events : {
		'click #gotoform' : 'showForm',
		'click #my_orders' : 'myOrders',
		'click #backToList' : 'backToList'
	},
	initialize : function(){
		this.render();
		console.error('here')
	},
	render : function(){
	},
	showForm : function(e){
		e.preventDefault();
		Backbone.history.navigate('#add',{trigger:true})

	},
	myOrders : function(e){
		e.preventDefault();
		Backbone.history.navigate('orders', {trigger:true})
	},
	backToList : function(e){
		e.preventDefault();
		Backbone.history.navigate('', {trigger:true});
	}
})