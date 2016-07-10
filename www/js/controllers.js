angular.module('app.controllers', [])

.controller('uPCtrl', function($scope) {

})

.controller('helpCtrl', function($scope) {

})

.controller('jobsCtrl', function($scope) {

})

.controller('eventsCtrl', function($scope) {
console.log($scope.zipcode);
$scope.search = function(zip)
{
temp = [];
var token = '02eb04f9d53f936c3474a400c620dca2';
var url = 'https://api.meetup.com/find/groups?zip='+ zip + '&radius=1&category=25&order=members&access_token='+token;
console.log(url);
var settings = {
//  "crossDomain":true,
  "async": false,
  "url": url,
  "method": "GET",
  "data-type" : "jsonp" ,
  "headers": {
  //  "authorization": "Bearer f090387a407f9ced87fa09259cd25b50",
    "content-type": "application/json",
  //  "cache-control": "no-cache",
  //  "postman-token": "7d914596-3d3e-2aca-6f76-d1d9cdc68a30"
/*,
    "Access-Control-Expose-Headers": "X-Meetup-server, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimt-Reset",
"Access-Control-Allow-Origin": "http://192.168.94.18:8100",
"Access-Control-Allow-Credentials": true,
"Access-Control-Allow-Methods": "GET, OPTIONS",
"Access-Control-Max-Age": "86400"*/
  }
}

$.ajax(settings).done(function (response) {
  console.log("Response ude: "+JSON.stringify(response[0]));
  temp = response;
});

$scope.items = new Array(temp.length);
for(var i=0;i<temp.length;i++)
{
  $scope.items[i] = temp[i].name;
}
//$scope.items =['Bay Area Fun meetup','Bay Area Young Friends','Time to eat and make more friends', 'San Jose Singles Meetup'];
}
})

.controller('discountsCtrl', function($scope) {


})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})

.controller('postSomethingCtrl', function($scope,$http) {
	/*console.log("log test");
	$http({
		async: true,
		crossDomain: true,
		method : "GET",
		url : "http://localhost:7000/commentserver"
	}).then(function mySucces(response) {
		console.log("success");
		console.log(JSON.stringify(response));
	}, function myError(response) {
		console.log("failure");
	});*/
	console.log($scope.tweetdata);
	$scope.tweet = function(data)
	{
	// ajax call to node server
	console.log('Inside tweetdata function');
	console.log(data);
	var url = 'http://localhost:6002/tweet';
	var data1 = {"status1":data};
	//console.log(data1);
	var success = function(data){console.log(JSON.stringify(data))};
	var dataType = 'application/json';
	/*$.ajax({
	  type: "POST",
	  url: url,
	  data: data1,
	  success: success,
	  dataType: dataType

	});
	*/

	var settings = {
	  //"async": true,
	  //"crossDomain": true,
	  "url": "http://localhost:6002/tweet",
	  "method": "POST",
	  //"processData": false,
	  //"contentType": false,
	  //"mimeType": "multipart/form-data",
	  "data": data1
	}

	$.ajax(settings).done(function (response) {
	console.log(response);
	});
  }
})
