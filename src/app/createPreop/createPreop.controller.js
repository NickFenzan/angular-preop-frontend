(function () {
    'use strict';

    angular
            .module('preop')
            .controller('CreatePreOpController', CreatePreOpController);

    /** @ngInject */
    function CreatePreOpController($state, $stateParams, appointments, historyLetter, ultrasoundLetter, history, plan, preopWorksheets) {
        var vm = this;
        vm.history;
        vm.historyLetter;
        vm.historyLetterIsCollapsed = true;
        vm.plan;
        vm.ultrasoundLetter;
        vm.ultrasoundLetterIsCollapsed = true;
        vm.notes = '';
        vm.submit = submit;
        getAppointment();

        function getAppointment() {
            vm.appointment = appointments.get({appointment_id: $stateParams.appointmentId}, function () {
                getMostRecentHistory();
                getMostRecentHistoryLetter();
                getMostRecentPlan();
                getMostRecentUltrasoundLetter();
            });
        }

        function getMostRecentHistory() {
            vm.history = history.get({patient_id: vm.appointment.patient.id});
        }

        function getMostRecentHistoryLetter() {
            vm.historyLetter = historyLetter.get({patient_id: vm.appointment.patient.id});
        }

        function getMostRecentPlan() {
            vm.plan = plan.get({patient_id: vm.appointment.patient.id});
        }

        function getMostRecentUltrasoundLetter() {
            vm.ultrasoundLetter = ultrasoundLetter.get({patient_id: vm.appointment.patient.id});
        }

        function submit() {
            var formdata = {
                appointment: vm.appointment,
                procedures: vm.plan.procedures,
                historyLetter: vm.historyLetter,
                ultrasoundLetter: vm.ultrasoundLetter,
                allergies: vm.history.allergies,
                premedications: vm.history.premedications,
                clearanceRequired: vm.plan.clearance_required,
                notes: vm.notes
            };
            preopWorksheets.save(formdata, submitCallback);
        }

        function submitCallback(data) {
            switch (data.result) {
                case "success":
                    $state.go('needsPreop');
                    break;
                default:
                    alert('There was a problem saving this pre-procedure sheet.');
                    break;

            }
        }

    }

})();