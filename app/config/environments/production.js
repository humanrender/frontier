module.exports.execute = function(app, express){
  app.configure('production', function(){
    app.use(express.errorHandler());
  });
};