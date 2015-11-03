(function () {
    'use strict';

    angular
            .module('preop')
            .filter('tel', telFilter);

    function telFilter() {
        return function (tel) {
            if(!tel){
                return '';
            }
            var value = tel.toString().trim().replace(/[^\d]/g, '');
            var areaCode, firstThree, lastFour;
            if (value.length === 10) {
                areaCode = value.slice(0, 3);
                firstThree = value.slice(3, 6);
                lastFour = value.slice(6);
                return '(' + areaCode + ') ' + firstThree + '-' + lastFour;
            }
            return tel;
        }
    }

})();