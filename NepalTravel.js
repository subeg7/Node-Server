var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' }); //uses layouts.main as the default layout
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    var travelPackages = [
        "Pokhara",
        "Sauraha",
        "Dadeldhura"
    ];
    res.render('home'); //home view is put on top of the default layout
});

app.get('/about', function (req, res) {
    var ourAwards = [
        "Best TA",
        "Best tourer",
        "Clean Visits"
    ];
    res.render('about',{ourAwards : ourAwards});
});

//custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost' + app.get('port') + '; press ctrl+c to terminate');
})