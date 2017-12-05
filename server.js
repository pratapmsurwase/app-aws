
const express = require('express');
var app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrent', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
		res.render('home.hbs', {
		pageTitle: 'Home Pages',
		currentYear: new Date().getFullYear()
	});
	});


app.get('/About', (req, res) => {
	//res.send('<h2>Hellow We are in About Page</h2>');
	res.render('about.hbs', {
		pageTitle: 'About Pages of',
		currentYear: new Date().getFullYear()
}); 
});

app.listen(port, () => {
    console.log(`Server is started on  ${port}`);
});



//app.listen(3000, () => {
//	console.log('Server is started on 3000');
//});