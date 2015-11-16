(function() {
  'use strict';

  angular
    .module('colorgapgit')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log('here');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home/index.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact/index.html'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
