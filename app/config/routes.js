var routes = require('../../routes');
module.exports.execute = function(app,express){
  // Routes

  app.get('/', routes.index);

};