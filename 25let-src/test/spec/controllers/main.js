'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('openshiftApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('two plus two makes four', function () {
    expect(2+2).toBe(4);
  });

  it('should have the start year to be equal to 1989', function () {
    expect(scope.startYear).toBe(1989);
  });
});
