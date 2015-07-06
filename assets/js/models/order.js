var app = app || {};

app.Order = Backbone.Model.extend({
	initialize : function(){
		// whatever is needed
	},
	defaults : {
		itemName   : "",
        itemDesc   : "",
        unitSize   : "",
        unitWeight : "",
        quantity   : undefined,
        location   : "",
        otherInfo  : "",
        status     : "Ordered",
        uploadedBy : "",
        orderedBy  : ""
	},
	parse : function(response){
		response.id = response._id['$oid'];
		return response;
	}
});