'use strict';

// Declare app level module which depends on views, and components
angular.module('inkfish', []).
config(["copyProvider", function(copyProvider)
{
	copyProvider.setText("Hello world!");
}]).
controller('nkMarketCtrl', NkMarketController).
directive('backImg', BackImage).
provider('copy', CopyProvider);

function NkMarketController($scope, copy, $sce)
{
	$scope.brand = copy.brand;
    $scope.seal = $sce.trustAsHtml(copy.seal);
    $scope.logo = $sce.trustAsHtml(copy.logo);
    $scope.description = copy.description;
	$scope.tagline = copy.tagline;
	$scope.contact = copy.contact;
	$scope.address = copy.address;
	$scope.phone = copy.phone;
	$scope.email = copy.email;
    $scope.social = copy.social;
    $scope.services = copy.services;
	$scope.imprinted = $sce.trustAsHtml(copy.imprinted);
	$scope.legal = $sce.trustAsHtml(copy.legal);
	$scope.sections = trustPropertyInArray(copy.sections, 'body');
    $scope.samples = trustPropertyInArray(copy.samples, 'cutline');

	function trustPropertyInArray(contentArray, target)
	{
		var trusted = {};
		for (var prop in contentArray)
		{
			var value = contentArray[prop];
            trusted[prop] = contentArray[prop];
            trusted[prop][target] = $sce.trustAsHtml(trusted[prop][target]);
		}
		return trusted;
	}
}
