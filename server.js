var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config={
    user:'vamshiraopadidela',
    database:'vamshiraopadidela',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var pool=new Pool(config);
app.get('/test-db',function(req,res){
    
    pool.query('SELECT * FROM save',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringfy(result));
        }
    });
});
app.get('/articles/:articleName', function (req, res) {
pool.query("SELECT * FROM article WHERE title= '"+req.params.articleName+ "'", function(err,result){
if (err){
res.status(500).send(err.toString());
}
else{
if(result.rows.length===0){
res.status(404).send('Article not found');
}
else{
var articleData= result.rows[0];
res.send(createTemplate(articles[articleName]));
}
}
});
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
