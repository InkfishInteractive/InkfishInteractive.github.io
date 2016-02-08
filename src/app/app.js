'use strict';

// Declare app level module which depends on views, and components
angular.module('inkfish', [
  'ngRoute',
  'inkfish.view1',
  'inkfish.view2',
  'inkfish.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
