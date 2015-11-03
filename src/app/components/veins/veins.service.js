(function () {
    'use strict';

    angular.module('preop')
            .factory('veins', veins);

    /** @ngInject */
    function veins($resource) {
        return $resource('/api/lists/veins.php');
    }


})();