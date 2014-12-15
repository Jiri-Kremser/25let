'use strict';

/**
 * @ngdoc function
 * @name openshiftApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the openshiftApp
 */
angular.module('openshiftApp')
  .controller('YearController', function ($scope, $http) {


  var getConfig = function(name, showLegend, color){
    return {
    title: name,
    tooltips: true,
    labels: false,
    mouseover: function() {
      //d.data.tooltip = d.data.x;
    },
    mouseout: function() {},
    click: function() {},
    /*colors: color ? color : [
        '#9EB7D4',
        '#69b59f',
        '#E79265',
        '#7FC958',
        '#9AD5C3',
        '#278065'
    ],*/
    colors: color ? color : [
        '#6BCAE2',
        '#51A5BA',
        '#41924B',
        '#AFEAAA',
        '#87E293',
        '#FE8402',
        '#777777',
        '#6BCAE2',
        '#aaaaaa',
        '#FE8402',
        '#87E293',
        '#6BCAE2',
        '#41924B',
        '#51A5BA',
        '#aaaaaa',
        '#AFEAAA',
        '#87E293',
        '#777777',
        '#41924B',
        '#FE8402'
    ],
    legend: {
      display: showLegend,
      htmlEnabled: true,
      position: 'right'
    },
    innerRadius: '50%',
    isAnimate: true
    };
  };

  $scope.configHdp = getConfig('', false, ['#69b59f']);
  $scope.configPie = getConfig('');
  $scope.configPie2 = getConfig('', true);
  $scope.configEmise = getConfig('', true);

  $scope.year = 1989;
  $scope.startYear = 1989;

  var errHadler = function(response) {
    console.error(response);
  };
  $http.get('data/hdp.json').success(function(response){
    $scope.hdp = response;
  }).error(errHadler);

  $http.get('data/inflace.json').success(function(response){
    $scope.inflace = response;
  }).error(errHadler);

  $http.get('data/emise.json').success(function(response){
    $scope.emise = response;
  }).error(errHadler);

  $http.get('data/vydaje.json').success(function(response){
    $scope.vydaje = response;
  }).error(errHadler);

  $http.get('data/odvetvi.json').success(function(response){
    $scope.odvetvi = response;
  }).error(errHadler);

  $http.get('data/delka-zivota-nezamestnanost.json').success(function(response){
    $scope.lidi = response;   
    $scope.$watch('year', function() {
      $scope.getLifeExpectancy = function(year){
        return {
          "series": ["Muži, Ženy"],
          "data": [{
            "x": year,
            "y": [$scope.lidi.data[year - $scope.startYear].y[0], $scope.lidi.data[year - $scope.startYear].y[1]]
          }]
        };
      }($scope.year);
    });
  }).error(errHadler);


});
