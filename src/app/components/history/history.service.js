(function(){
    'use strict';
    
    angular
            .module('preop')
            .factory('history', history);
    
    /** @ngInject */
    function history($resource){
        return $resource('/api/patient/history.php');
    }
    
})();