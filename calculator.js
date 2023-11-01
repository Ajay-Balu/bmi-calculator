//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    sum=n1+n2;

    res.send("Sum of two numbers is : " + sum);
});

 // Route for redirect
 app.post('/redirect', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
 });

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    var w = Number(req.body.num1);
    var h = Number(req.body.num2);

    bmi=Math.round(w/(h*h));

    res.send("your BMI is : " + bmi);
});

app.listen(3000, () => {
    console.log('Calculator app listening on port 3000!');
});