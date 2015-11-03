(function () {
    'use strict';

    angular.module('preop')
            .factory('millerveinProcedureNames', millerveinProcedureNames);

    /** @ngInject */
    function millerveinProcedureNames($resource) {
        return $resource('/api/lists/millervein_procedure_names.php');
    }


})();