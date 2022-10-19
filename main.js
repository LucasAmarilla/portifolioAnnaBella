const express = require ('express');
const app = express();
app.use(express.static("public"));



app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/campanhas", function(req, res){
    res.sendFile(__dirname + '/campanhas.html');
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + '/contato.html');
});

app.get("/bio", function(req, res){
    res.sendFile(__dirname + '/bio.html');
});

app.listen(3000, function(){
    console.log('Server running port 3000');
});