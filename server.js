// Module dependencies
var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

// Connect to DB
//mongoose.connect('mongodb://localhost/item_database');
mongoose.connect('mongodb://Decky84:Dendrox1@ds035517.mongolab.com:35517/site_manager');


// Schemas

var Item = new mongoose.Schema({
	itemName   : String,
	itemDesc   : String,
	unitSize   : String,
	unitWeight : String,
	quantity   : Number,
	location   : String

});

// Models
var ItemModel = mongoose.model('Item', Item);


// Create Server
var app = express();

// Configure Server
app.configure( function(){
	// parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.body for HTTP method Overrides
	app.use( express.methodOverride() );

	// perform route lookup based on URL and HTTP method
	app.use( app.router );

	// where to serve static content
	app.use( express.static( path.join( application_root, '/')));

	// show all errors in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
});


// Get a list of all books
app.get('https://api.mongolab.com/api/1/databases/site_manager/collections/items?apiKey=iVU0IeMR4GTTwMVmXwsIqqjbPooI9St3', function( request, response){
	return ItemModel.find( function( err, items){
		if(!err){
			return response.send( items );
		}
		else{
			return console.log(err);
		}
	});
});

// Insert a new book
app.post('/api/items', function(request, response){
	var item = new ItemModel({
		itemName   : request.body.itemName,
		itemDesc   : request.body.itemDesc,
		unitSize   : request.body.unitSize,
		unitWeight : request.body.unitWeight,
		quantity   : request.body.quantity,
		location   : request.body.location
	});

	item.save( function(err){
		if(!err){
			return console.log('item created')
		}
		else{
			return console.log(err)
		}
	});
	return response.send( item )
});

// Get a single book by ID
app.get('/api/items/:id', function( request, response ){
	return ItemModel.findById( request.params.id, function(err, item){
		if(!err){
			return response.send(item);
		}
		else{
			return console.log(err)
		}
	});
});

// Update a book
app.put('/api/items/:id', function( request, response ){
	console.log('Updating Item '+ request.body.itemName );

	return ItemModel.findById( request.params.id, function(err, item){
		item.itemName   = request.body.itemName;
		item.itemDesc   = request.body.itemDesc;
		item.unitSize   = request.body.unitSize;
		item.unitWeight = request.body.unitWeight;
		item.quantity   = request.body.quantity;
		item.location   = request.body.location;

		return item.save( function(err){
			if(!err){
				console.log('item updated');
			}
			else{
				console.log(err);
			}
			return response.send( item )
		});
	});
});

// Delete a book
app.delete('/api/items/:id', function(request, response){
	console.log('Deleting item with id ' + request.params.id);

	return ItemModel.findById( request.params.id, function(err, item){
		return item.remove( function(err){
			if(!err){
				console.log('Item removed');
				return response.send( '' );
			}
			else{
				console.log(err);
			}
		});
	});
});

// Routes
app.get('/api', function(request, response){
	response.send('Library API is running')
})

// Start Server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Server listening on port ', port, app.settings.env)
});