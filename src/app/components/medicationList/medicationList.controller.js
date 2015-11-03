(function () {
    'use strict';

    angular
            .module('preop')
            .controller('MedicationListController', MedicationListController);

    /** @ngInject */
    function MedicationListController(medications) {
        var vm = this;

        vm.medications = [];
        vm.add = add;
        vm.remove = remove;
        vm.searchMedications = searchMedications;

        //---------------------------------------//

        function add() {
            if(typeof vm.newMedication.id !== 'undefined'){
                vm.medications.push(vm.newMedication);
                vm.newMedication = '';
            }
        }

        function remove(key) {
            vm.medications.splice(key, 1);
        }
        
        function searchMedications(val) {
            return medications.query({'search': val}).$promise;
        }

    }

})();