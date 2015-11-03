(function() {
  'use strict';

  angular
    .module('preop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
//      .state('home', {
//        url: '/',
//        templateUrl: 'app/main/main.html',
//        controller: 'MainController',
//        controllerAs: 'main'
//      })
      .state('needsPreop', {
        url:'/needs-preop',
        templateUrl: 'app/needsPreop/needsPreop.html',
        controller: 'NeedsPreopController',
        controllerAs: 'needsPreop'
      })
      .state('createPreop', {
        url:'/create-preop/:appointmentId',
        templateUrl: 'app/createPreop/createPreop.html',
        controller: 'CreatePreOpController',
        controllerAs: 'preop'
      })
      ;

    $urlRouterProvider.otherwise('/needs-preop');
  }

})();
