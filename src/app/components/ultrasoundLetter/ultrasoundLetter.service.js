(function () {
    'use strict';

    angular
            .module('preop')
            .factory('ultrasoundLetter', ultrasoundLetter);

    /** @ngInject */
    function ultrasoundLetter($resource) {
        return $resource('/api/patient/ultrasound_letter.php');
    }
    
})();