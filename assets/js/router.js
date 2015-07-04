var app = app || {};

app.Router = Backbone.Router.extend({
	routes : {
		'' : 'listView',
		'add' : 'formView',
		'item/:id' : 'itemView'
	},
	listView : function(){
		this.loadView(new app.LibraryView());
	},
	formView : function(){
		this.loadView(new app.FormView());
	},
	itemView : function(id){
		
		var items = new app.Library();
		items.fetch();
		var model = items.where({itemName : 'unbelievable'});

		console.log(items)
		//this.loadView(new app.ItemView({model : model}));
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
