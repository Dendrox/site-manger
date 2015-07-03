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
        $('#header').empty();
		setTimeout(function(view){
			var header = new app.Header();
			this.view = view;
		},30)
		
	}
});
