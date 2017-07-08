const express = require('express');
const fs = require('fs');

console.log('Redirect started ...');
fs.readFile('config.json', 'utf8', function(err,data) {
  if(err) throw err;
  var config = JSON.parse(data);
  console.log('Config file loaded ...');

  var app = express();
  app.get('*',function(req,res){
    res.redirect(config.redirect);
  });
  app.listen(config.port);

  console.log('Redirect ready at port: ' + config.port);
  console.log('Redirect pointing to: ' + config.redirect);
});
