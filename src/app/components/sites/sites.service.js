(function(){
    'use strict';
    
    angular
      .module('preop')
      .factory('sites',sites);
      
    /** @ngInject */
    function sites($resource){
        return $resource('/api/sites/sites.php', {}, {
            query: {method: 'GET',  isArray: true}
        });
    }
    
})();
