angular.module('app.controllers', [])
  
.controller('uPCtrl', function($scope) {

})
      
.controller('helpCtrl', function($scope) {
  
})
   
.controller('jobsCtrl', function($scope) {

})
   
.controller('eventsCtrl', function($scope) {

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
 