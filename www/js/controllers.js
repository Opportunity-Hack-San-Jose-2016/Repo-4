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
	console.log("log test");
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
    });
	
	
})
 