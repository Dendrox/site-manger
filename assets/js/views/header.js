var app = app || {};

app.Header = Backbone.View.extend({
	tagName : 'div',
	el     : '#header',
	button : '<button id="gotoform">Add</button>',
	events : {
		'click #gotoform' : 'showForm',
		'click #my_orders' : 'myOrders',
		'click #backToList' : 'backToList',
		'click #side_menu' : 'toggleMenu'
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
	},
	toggleMenu : function(){
		if(app.menuState === false){
			$('#menu_div').animate({width : '160px'}, function(){
				app.menuState = true;
			})
			
		}
		else{
			$('#menu_div').animate({width : '0px'}, function(){
				app.menuState = false;
			})
			
		}
		
	}
})