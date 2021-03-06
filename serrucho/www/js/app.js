// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.rest', {
      url: '/rest',
      views: {
        'tab-rest': {
          templateUrl: 'templates/tab-rest.html',
          controller: 'RestCtrl'
        }
      }
    })

	.state('tab.rest.mis', {
        url: '/mis',
        views: {
            'tab-rest-mis': {
                templateUrl: 'templates/tab-rest-mis.html',
                controller: 'MisRestCtrl'
            }
        },
        resolve: {
            mode: function() {
                return 'mis';
            }
        }
    })

	.state('tab.rest.all', {
        url: '/all',
        views: {
            'tab-rest-all': {
                templateUrl: 'templates/tab-rest-all.html',
                controller: 'AllRestCtrl'
            }
        },
        resolve: {
            mode: function() {
                return 'all';
            }
        }
    })

	.state('tab.rest.bills', {
        url: '/bills',
        views: {
            'tab-rest-bills': {
                templateUrl: 'templates/tab-rest-bills.html',
                controller: 'BillsRestCtrl'
            }
        },
        resolve: {
            mode: function() {
                return 'bills';
            }
        }
    })

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  })

	.state('tab.pres', {
      url: '/pres',
      views: {
        'tab-pres': {
          templateUrl: 'templates/tab-pres.html',
          controller: 'PresCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
