(function(){
    'use strict';
    
    angular
            .module('preop')
            .factory('plan', plan);
    
    /** @ngInject */
    function plan($resource){
        return $resource('/api/patient/plan.php');
    }
    
})();