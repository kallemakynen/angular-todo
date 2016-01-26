'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'test-1';
    scope.addTodo();
    expect(scope.todos[0]).toBe('test-1');
  });

  it('should add and remove item from the list', function () {
    scope.todo = 'test-2';
    scope.addTodo();
    expect(scope.todos[0]).toBe('test-2');
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});