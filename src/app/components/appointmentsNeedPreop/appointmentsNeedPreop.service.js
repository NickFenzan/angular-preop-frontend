(function(){
    'use strict';
    
    angular
      .module('preop')
      .factory('appointmentsNeedPreop',appointmentsNeedPreop);
      
    /** @ngInject */
    function appointmentsNeedPreop($resource){
        return $resource('/api/preop/need_preop.php', {}, {
            query: {method: 'GET',  isArray: true}
        });
    }
    
})();
