(function() {
  'use strict';

  angular
    .module('colorgapgit', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap']);

})();

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

(function() {
  'use strict';

  angular
    .module('colorgapgit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
