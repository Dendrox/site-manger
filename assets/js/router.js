var app = app || {};

app.Router = Backbone.Router.extend({
	routes : {
		'login'    : 'loginView',
		'' : 'listView',
		'add' : 'formView',
		'item/:id' : 'itemView',
		'order/:id' : 'orderView',
		'orders'    : 'ordersView'
	},
	loginView : function(){
		this.loadView(new app.LoginView());		
	},	
	listView : function(){
		this.loadView(new app.LibraryView());
	},
	formView : function(){
		this.loadView(new app.FormView());
	},
	itemView : function(id){
		
		this.loadView(new app.ItemView({id:id}));
	},
	orderView : function(id){
		this.loadView(new app.OrderView({id:id}))
	},
	ordersView : function(){
		this.loadView(new app.OrdersView())
	},
	loadView : function(view) {
		this.view && this.view.remove();
        $('#header').empty();
		setTimeout(function(view){
			var header = new app.Header();
			this.view = view;
		},30)
		
	}
});
