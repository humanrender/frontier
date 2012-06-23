module.exports.execute = function(app, express){
  // Configuration

  app.configure(function(){
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static('./public'));
  });
  
  var fs = require("fs");
  
  fs.readdirSync("./app/config/environments").forEach(function(file) {
    require("./environments/" + file).execute(app,express);
  });
  
  require("./routes").execute(app,express);
  
};