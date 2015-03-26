var WorkoutApp = angular.module('WorkoutApp', []);

WorkoutApp.controller('RegimenCtrl', function ($scope) {

  $scope.toggleDoneStatus = function(thing)
  {
    $scope.done = !$scope.done;
  };

  $scope.regimens = [
      {
        name:"Strong Lift",
        startDate:"03/05/2015",
        endDate:"-1",
        exercises:[
          {
            name:"Squat",
            weight:{
              value:300,
              unit:"LB"
            },
            sets:[
              {
                rep:5, done:false
              },
              {
                rep:5, done:false
              },
              {
                rep:5, done:false
              },
              {
                rep:5, done:false
              },
              {
                rep:5, done:false
              }
            ],
            rest:{
              easy:90,
              hard:180
            },
            day:"m;w;f",
            week:"1, 3"
          },
          {
            name:"bench",
            weight:{
              value:300,
              unit:"LB"
            },
            sets:[
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              }
            ],
            "rest":{
              "easy":90,
              "hard":180
            },
            "day":"m;w;f",
            "week":"1, 3"
          },
          {
            "name":"test other days and weeks",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "sets":[
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              },
              {
                "rep":5, done:false
              }
            ],
            "rest":{
              "easy":90,
              "hard":180
            },
            "day":"tu;th;sa;su",
            "week":"2, 4"
          },
        ]
      },
      {
        "name":"Whole In One",
        "startDate":"03/05/2015",
        "exercises":[
          {
            "name":"Bench Press",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "sets":[
              {
                "rep":8, done:false
              },
              {
                "rep":10, done:false
              },
              {
                "rep":12, done:false
              }
            ],
            "day":[
              {
                "value":"m"
              },
              {
                "value":"th"
              },
            ],
            "week":1
          },
          {
            "name":"Lat Pulldown",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "sets":[
              {
                "rep":10, done:false
              },
              {
                "rep":12, done:false
              },
              {
                "rep":15, done:false
              }
            ],
            "week":1
          }
        ]
      }
    ];
});