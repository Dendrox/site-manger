var app = app || {};

app.Header = Backbone.View.extend({
	tagName : 'div',
	el     : '#header',
	button : '<button id="gotoform">Add</button>',
	events : {
		'click #gotoform' : 'showForm'
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
})