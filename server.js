const express = require('express')
const app = express()

app.get('/', function (req, res) {
res.render('index');
})

app.set('view engine', 'ejs')

app.listen(3000, "0.0.0.0",  function() {
console.log('Example listening on port 3000')
})
