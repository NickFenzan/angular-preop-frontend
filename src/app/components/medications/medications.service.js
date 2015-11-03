(function () {
    'use strict';

    angular.module('preop')
            .factory('medications', medications);

    /** @ngInject */
    function medications($resource) {
        return $resource('/api/lists/medications.php');
    }


})();