const express = require('express');
var exphbs  = require('express-handlebars');

const app = express();

// handlebar middleware
app.engine('handlebars');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index')
});

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});