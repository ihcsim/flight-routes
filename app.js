var request = require('request');

module.exports = function(context, callback) {
  var url = 'https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat';
  var source = context.query.src;
  var destination = context.query.des;

  request({
    url: url,
    method: 'GET',
    encoding: 'utf8'
  }, function (error, gres, body) {
    if (error) {
      callback(error);
      return;
    }

    var connected = false;
    var routes = body.split("\n");
    for(var index in routes){
      parts = routes[index].split(",");
      if (parts[2] == source && parts[4] == destination) {
        connected = true;
        break;
      }
    }

    response = source + ' and ' + destination;
    response += (connected ? ' are connected' : ' aren\'t connected');
    callback(error, response);
  });
};
