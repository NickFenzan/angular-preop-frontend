(function () {
    'use strict';

    angular
            .module('preop')
            .controller('ProcedureListController', ProcedureListController);

    /** @ngInject */
    function ProcedureListController(veins, millerveinProcedureNames) {
        var vm = this;

        vm.lateralities = ['right','left'];
        vm.newLaterality = vm.lateralities[0];
        lookupVeins();
        lookupProcedureNames();
        vm.procedures = [];
        vm.add = add;
        vm.remove = remove;
        
        //---------------------------------------//

        function add() {
            var procedure = {
                laterality: vm.newLaterality,
                vein: vm.newVein,
                procedure: vm.newProcedure
            };
            vm.procedures.push(procedure);
            clearInputs();
        }

        function clearInputs() {
            vm.newLaterality = vm.newVein = vm.newProcedure = '';
        }

        function remove(key) {
            vm.procedures.splice(key, 1);
        }

        function lookupVeins() {
            vm.veins = veins.query(function(){
                vm.newVein = vm.veins[0];
            });
        }
        
        function lookupProcedureNames() {
            vm.procedureNames = millerveinProcedureNames.query(function(){
                vm.newProcedure = vm.procedureNames[0];
            });
        }

    }

})();