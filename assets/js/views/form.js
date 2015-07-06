var app = app || {};

app.FormView = Backbone.View.extend({
	tagName   : 'div',
	className : 'addForm',
	template  : _.template( $('#formTemplate').html()+'<button id="add">Save</button>' ),

	events : {
		'click #add' : 'addItem'
	},

	initialize : function(){
		this.collection = new app.Library();
		
		$('#header').empty();
		this.render();	
		console.error('form')	
	},
	render : function(){
		this.$el.html(this.template());
		$('#items').empty().append(this.$el)
		return this;
		
	},

	addItem : function(e){
		e.preventDefault();
		alert('adding')
		var formData = {}
		
		$( '#addItem div' ).children( 'input' ).each( function(i, el){
			if( $(el).val() !== '' ){

				formData[el.id] = $(el).val();
			}
			// Clear Data from input fields
			$(el).val('');
		});

		$('#addItem div').children('textarea').each(function(i, el){
			if( $(el).val() !== '' ){

				formData[el.id] = $(el).val();
			}
			// Clear Data from input fields
			$(el).val('');
		})

		this.collection.create( formData, {
			wait : true,
			success : function(response){
				console.error('model created')
				console.error(response);
				Backbone.history.navigate('',{trigger:true});
			},
			error : function(err){
				console.error('model not created')
				console.error(err)
			}
		} )
		//Backbone.history.navigate('',{trigger:true});
	}


})