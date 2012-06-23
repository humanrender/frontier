
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();
require("./app/config/config").execute(app,express);
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
require("./front-pack.js").execute(app,express);