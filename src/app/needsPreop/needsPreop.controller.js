(function() {
  'use strict';

  angular
    .module('preop')
    .controller('NeedsPreopController', NeedsPreopController);

  /** @ngInject */
  function NeedsPreopController(sites, appointmentsNeedPreop) {
    var vm = this;

    vm.sites = [];
    vm.appointments = [];
    vm.findAppointments = findAppointments;
    init();
    
    function init(){
        vm.sites = sites.query(function(){
            if(vm.sites.length > 0 ){
                vm.activeSite = vm.sites[0].id;
                findAppointments();
            }
        });
    }
    
    function findAppointments(){
        vm.appointments = appointmentsNeedPreop.query({site_id: vm.activeSite});
    }
  }
})();
