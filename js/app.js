/*(function() {
'use strict';
angular.module('MyFirstApp', [])

.controller('AppController', printRation);
printRation.$inject = ['$scope'];
function printRation($scope) {
    $scope.ration = '';
    $scope.classValue = '';
    $scope.finalValue = '';
    $scope.checkRation = function() {
        let arrRation = $scope.ration.replace(/[.,%]/g, '').split(' ');
        let filterArr = arrRation.filter(item => item != '');
        let finalValue = filterArr.length;
        if (finalValue > 3) {
            $scope.finalValue = 'Too much!';
            $scope.classValue = 'not_empty';
        } else if (finalValue > 0) {
            $scope.finalValue = 'Enjoy!';
            $scope.classValue = 'not_empty';
        } else {
            $scope.finalValue = 'Please enter data first';
            $scope.classValue = 'empty';
        }
    }
}
})(); */

!function(){"use strict";function l(l){l.ration="",l.classValue="",l.finalValue="",l.checkRation=function(){let e=l.ration.replace(/[.,%]/g,"").split(" ").filter(l=>""!=l).length;e>3?(l.finalValue="Too much!",l.classValue="not_empty"):e>0?(l.finalValue="Enjoy!",l.classValue="not_empty"):(l.finalValue="Please enter data first",l.classValue="empty")}}angular.module("MyFirstApp",[]).controller("AppController",l),l.$inject=["$scope"]}();