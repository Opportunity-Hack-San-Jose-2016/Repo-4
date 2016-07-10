var express = require('express');
var router = express.Router();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'xSTmTmlLkQoky0hMqKo4vR1QH',
  consumer_secret: 'jAs2Veb66uHSs4xjgQWYvmGsLyYxJi2rO08hFHvYemUunIbOqd',
  access_token_key: '293872427-X54o6JwM7tS91uhLfikFDdK3s70qn5FMgYe1iC0I',
  access_token_secret: 'GxbfJ17JmaOUkmjqby3lzt4nWzwciFyf86FKv1PdOqQY3'
});

router.post('/', function(req, res, next) {
    console.log("Post ajax log");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "X-Requested-With");
    console.log("REQ" + req.body.status1);
    var stat = req.body.status1;
    //var data = req.body.status;
    //console.log("DATA----------" + data);
    client.post('statuses/update', {status: stat},  function(error, tweet, response){
  //if(error)
  //  console.log("Error"+JSON.stringify(error));
  //console.log(tweet);  // Tweet body.
  //console.log(response);  // Raw response object.
});
res.send("hi");
});

module.exports = router;
