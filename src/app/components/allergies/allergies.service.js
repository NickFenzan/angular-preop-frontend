(function () {
    'use strict';

    angular.module('preop')
            .factory('allergies', allergies);

    /** @ngInject */
    function allergies($resource) {
        return $resource('/api/lists/allergies.php');
    }


})();