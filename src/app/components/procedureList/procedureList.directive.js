(function () {
    'use strict';

    angular.module('preop')
            .directive('mvProcedureList', ProcedureList);
    
    /** @ngInject */
    function ProcedureList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/procedureList/procedure-list.html',
            scope: {},
            controller: "ProcedureListController",
            controllerAs: 'vm',
            bindToController:{
                procedures: '='
            }
        };
        
        return directive;
    }
    
})();