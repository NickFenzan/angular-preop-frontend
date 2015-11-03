(function () {
    'use strict';
    angular
            .module('preop')
            .factory('preopWorksheets', preopWorksheets);

    /** @ngInject */
    function preopWorksheets($resource) {
        return $resource('/api/preop/preop.php');
    }
})();