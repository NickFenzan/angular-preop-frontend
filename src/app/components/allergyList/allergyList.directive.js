(function () {
    'use strict';

    angular.module('preop')
            .directive('mvAllergyList', AllergyList);
    
    /** @ngInject */
    function AllergyList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/allergyList/allergy-list.html',
            scope: {},
//            scope: {
//                allergies: '=bind'
//            },
            controller: "AllergyListController",
            controllerAs: 'vm',
//            bindToController: true
            bindToController:{
                allergies: '='
            }
        };
        
        return directive;
    }
    
})();