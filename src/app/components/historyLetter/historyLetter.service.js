(function () {
    'use strict';

    angular
            .module('preop')
            .factory('historyLetter', historyLetter);

    /** @ngInject */
    function historyLetter($resource) {
        return $resource('/api/patient/history_letter.php');
    }
    
})();