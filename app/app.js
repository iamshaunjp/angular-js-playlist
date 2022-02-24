var myNinjaApp = angular.module('myNinjaApp', ['ngRoute'])

myNinjaApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController',
      })
      .otherwise({
        redirectTo: '/home',
      })
  },
])

myNinjaApp.controller('NinjaController', [
  '$scope',
  function ($scope) {
    //remove ninja
    $scope.removeNinja = function (ninja) {
      var removedNinja = $scope.ninjas.indexOf(ninja)
      $scope.ninjas.splice(removedNinja, 1)
    }

    $scope.addNinja = function () {
      //add a new ninja
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true,
      })

      $scope.newninja.name = ''
      $scope.newninja.belt = ''
      $scope.newninja.rate = ''
    }

    //list of ninjas in object
    $scope.ninjas = [
      {
        name: 'Yoshi',
        belt: 'green',
        rate: 50,
        available: true,
        thumb: 'content/img/yoshi.png',
      },
      {
        name: 'Crystal',
        belt: 'yellow',
        rate: 30,
        available: true,
        thumb: 'content/img/crystal.png',
      },
      {
        name: 'Ryu',
        belt: 'orange',
        rate: 10,
        available: false,
        thumb: 'content/img/ryu.png',
      },
      {
        name: 'Shaun',
        belt: 'black',
        rate: 1000,
        available: true,
        thumb: 'content/img/shaun.png',
      },
    ]
  },
])
