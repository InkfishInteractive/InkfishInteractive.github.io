'use strict';

// Declare app level module which depends on views, and components
angular.module('inkfish', []).
config(["copyProvider", function (copyProvider) {
        copyProvider.setText("Hello world!");
    }]).
controller('nkMarketCtrl', NkMarketController).
directive('backImg', BackImage).
provider('copy', CopyProvider);

function NkMarketController($scope, copy)
{
    $scope.brand = copy.brand;
	$scope.tagline = copy.tagline;
	$scope.highlights = copy.highlights;
    $scope.contact = copy.contact;
    $scope.address = copy.address;
	$scope.phone = copy.phone;
	$scope.email = copy.email;
	$scope.imprinted = copy.imprinted;
    $scope.legal = copy.legal;
}
