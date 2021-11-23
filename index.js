const express = require('express');
const exphbs  = require('express-handlebars');
let AvoRoutes = require("./routes/routes");

const app = express();
const PORT =  process.env.PORT || 3019;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const avoRoutes = AvoRoutes();
// let counter = 0;

// app.get('/', function(req, res) {
// 	res.render('index', {
// 		counter
// 	});
// });
app.get("/", avoRoutes.home);
app.post("/shops", avoRoutes.shops());
app.get("/deals", avoRoutes.deals());
app.post("/Choose", avoRoutes.choose());

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`AvoApp started on port ${PORT}`)
});