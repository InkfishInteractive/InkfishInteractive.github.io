'use strict';

// Declare app level module which depends on views, and components
angular.module('inkfish', []).
config(["copyProvider", function (copyProvider) {
        copyProvider.setText("Hello world!");
    }]).
controller('nkMarketCtrl', NkMarketController).
directive('nkHero', NkHeroDirective).
directive('nkHighlights', NkHighlightsDirective).
directive('nkFooter', NkFooterDirective).
directive('backImg', BackImage).
provider('copy', CopyProvider);

function NkMarketController($scope, copy)
{
    $scope.brand = copy.brand;
	$scope.tagline = copy.tagline;
	$scope.highlights = copy.highlights;
}
