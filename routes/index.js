var express = require('express');
var router = express.Router();
var https = require('https');
var http = require('http');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'wordgraph' });
})
;
/* GET messages. */
router.get('/messages', function(req, res) {
  var messages = [];
  var messageId = 300559876768618;
  var token = 'CAACEdEose0cBAA82ZAmTJMFJaUzKEV8TXb9w2Fa15MdSXU5HDNvdwhDyuFTUOLWZCCEWYtuWXTUZA0DvB5q7sjpNWemXc10AwWCXfgPHsWcoorUWQole7XyecS1xVVEBKnnwe3Bn9yKC8XrZBecJSuqta86FzpOUzl6bbywbfREuBafVP7VjZCOlKfwx0WCkZD';

  function process(data) {
    if(data.data.length) {
      messages = messages.concat(data.data);
    }
    if(data.paging && data.paging.next) {
      console.log('Getting next page');
      return $.getJSON(data.paging.next).then(process);
    }
  }

  var options = {
    hostname: 'graph.facebook.com',
    // port: 443,
    path: '/' + messageId + '/comments' + '?format=json&access_token=' + token,
    method: 'GET'
  };

  var fbreq = https.request(options, function(fbres) {
    console.log('statusCode: ', fbres.statusCode);
    console.log('Headers: ', fbres.headers);

    var body = '';

    fbres.on('data', function(p) {
      body += p;
    });

    fbres.on('end', function() {
      var data = JSON.parse(body)
      if(data.paging && data.paging.next) {
        console.log('Getting next page');
        return $.getJSON(data.paging.next).then(process);
      }
      res.end()
    });
  });

  fbreq.end();

  fbreq.on('error', function(e) {
    console.error(e);
  });

});

module.exports = router;
