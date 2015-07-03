var app = app || {};

app.Router = Backbone.Router.extend({
	routes : {
		'' : 'listView',
		'add' : 'formView'
	},
	listView : function(){
		this.loadView(new app.LibraryView());
	},
	formView : function(){
		this.loadView(new app.FormView());
	},
	loadView : function(view) {
		this.view && this.view.remove();

		setTimeout(function(view){
			this.view = view;
		},30)
		
	}
});
