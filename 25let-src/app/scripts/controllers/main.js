'use strict';

/**
 * @ngdoc function
 * @name openshiftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openshiftApp
 */
angular.module('openshiftApp')
  .controller('MainController', function ($scope, $http) {
  
  var getConfig = function(name, showLegend, color, lineType, labelss){
    return {
    title: name,
    tooltips: true,
    labels: labelss ? labelss : false,
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
        '#FE8402'
    ],
    legend: {
      display: showLegend,
      htmlEnabled: true, 
      position: 'right'
    },
    isAnimate: true,
    lineCurveType: lineType ? lineType : 'cardinal'
    };
  };

  
  $scope.configHdp = getConfig('', false, ['#69b59f']);
  $scope.configEmise = getConfig('', true);
  $scope.configInflace = getConfig('', false, ['#FE8402'], 'step-after', true);
  $scope.configLidi = getConfig('', false, ['#51A5BA', '#FF604B', '#E9AC20']);

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

  $http.get('data/delka-zivota-nezamestnanost.json').success(function(response){
    $scope.lidi = response;
  }).error(errHadler);

  $http.get('data/emise.json').success(function(response){
    $scope.emise = response;
  }).error(errHadler);


});
