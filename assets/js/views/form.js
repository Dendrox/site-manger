var app = app || {};

app.FormView = Backbone.View.extend({
	tagName   : 'div',
	className : 'addForm',
	el        : '#items',
	template  : _.template( $('#formTemplate').html() ),

	events : {
		'click #add' : 'addItem'
	},

	initialize : function(){
		this.collection = new app.Library();
		this.render();

	},
	render : function(){
		this.$el.html(this.template());
		
		return this;
		
	},

	addItem : function(e){
		e.preventDefault();

		var formData = {}
		
		$( '#addItem div' ).children( 'input' ).each( function(i, el){
			if( $(el).val() !== '' ){

				formData[el.id] = $(el).val();
			}
			// Clear Data from input fields
			$(el).val('');
		});

		this.collection.create( formData )
		Backbone.history.navigate('',{trigger:true});
	}


})