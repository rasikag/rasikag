const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');

const app = express();

// handlebar middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index')
});

app.use(express.static(path.join(__dirname, '/assets')));
const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});