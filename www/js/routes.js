angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.uP', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uP.html',
        controller: 'uPCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.help', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('menu.jobs', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jobs.html',
        controller: 'jobsCtrl'
      }
    }
  })

  .state('menu.events', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu.discounts', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/discounts.html',
        controller: 'discountsCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.page', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

  .state('menu.postSomething', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/postSomething.html',
        controller: 'postSomethingCtrl'
      }
    }
  })

  .state('menu.viewPosts', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewPosts.html',
        controller: 'viewPostsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page8')

  

});