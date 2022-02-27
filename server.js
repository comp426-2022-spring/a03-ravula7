//Requiring dependencies

const express = require('express')
const app = express();


//Starting app server
var port = 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

//Defining check endpoint FIRST
app.get('/app', (req,res) => {
    res.status(200).end('OK')
})

//Defining default endpoint 
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
})

