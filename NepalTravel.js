var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Nepal Travel');
});

app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('See All About This travel itinerary');
});

//custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - The route you entered is not found');
});

//custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost' + app.get('port') + '; press ctrl+c to terminate');
})