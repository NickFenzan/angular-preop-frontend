(function () {
    'use strict';

    angular
            .module('preop')
            .controller('AllergyListController', AllergyListController);

    /** @ngInject */
    function AllergyListController(allergies) {
        var vm = this;

        vm.allergies = [];
        vm.add = add;
        vm.remove = remove;
        vm.searchAllergies = searchAllergies;

        //---------------------------------------//

        function add() {
            if(typeof vm.newAllergy.id !== 'undefined'){
                vm.allergies.push(vm.newAllergy);
                vm.newAllergy = '';
            }
        }

        function remove(key) {
            vm.allergies.splice(key, 1);
        }
        
        function searchAllergies(val) {
            return allergies.query({'search': val}).$promise;
        }

    }

})();