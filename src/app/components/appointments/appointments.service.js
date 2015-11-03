(function(){
    'use strict';
    
    angular
      .module('preop')
      .factory('appointments',appointments);
      
    /** @ngInject */
    function appointments($resource){
        return $resource('/api/appointments/appointments.php');
    }
    
})();
