(function () {
    'use strict';

    angular.module('preop')
            .directive('mvMedicationList', MedicationList);
    
    /** @ngInject */
    function MedicationList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/medicationList/medication-list.html',
            scope: {},
            controller: "MedicationListController",
            controllerAs: 'vm',
            bindToController:{
                medications: '='
            }
        };
        
        return directive;
    }
    
})();