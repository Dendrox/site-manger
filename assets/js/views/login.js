var app = app || {};

app.LoginView = Backbone.View.extend({
	template : _.template($('#loginTemplate').html()),

	events : {
		'click #login_button' : 'checkLogin'
	},

	initialize : function(){
		this.collection = new app.Users();
		// this.collection.fetch({reset : true});
		console.log('rout');

		this.render()
	},
	render : function(){
		this.$el.html(this.template());
		$('#login').empty().append(this.$el);
	},
	checkLogin : function(){
		//app.login = Math.floor(Math.random()*100 +1);
		Backbone.history.navigate('all', {trigger : true});
		/*this.collection.each(function(item){
			console.log(item)
		}, this)*/

		
	}

});