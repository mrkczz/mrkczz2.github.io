

const express = require('express')
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

 

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.sendFile('index.html', (err) => {
        if (err){
            console.log(err);

        }
    })
});



app.get('/hello', (req, res) => {
    res.send('GET: Hello!');
});



app.get('/hello/:name', (req,res) => {
    const routeParams = req.params;
    const name = routeParams.name
    res.send('GET: Hello, ' + name);
});



app.post('/hello', jsonParser, (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    res.send('POST: Name: ' + name + ', email: ' + email);
})

app.listen(port, () => {
    console.log('My first app listening on port ${port} !')
})

app.post('/form', jsonParser, (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const message = body.message;
    res.send(`POST by form.js - name = ${name}, email = ${email}, message = ${message}`);
});