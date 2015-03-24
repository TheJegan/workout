var WorkoutApp = angular.module('WorkoutApp', []);




WorkoutApp.controller('RegimenCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://private-ba1e6-workoutapi.apiary-mock.com/workout').success(function(data) {
      $scope.regimen = data.regimen;
    });

}]);