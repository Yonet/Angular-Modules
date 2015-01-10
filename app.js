var app = angular.module('catstagram', []);
app.controller('CatController', ['$scope', '$http', function($scope, $http){


	$scope.comments = [];
	$scope.comment = {};
	$http.get('data.json')
		.success(function(data, status, headers, config) {
			$scope.cats = data.cats;
		});

	$scope.like = function(index) {
		$scope.cats[index].likes ++;
	}

	$scope.addCat = function(newCat) {
		newCat.likes = 1;
		$scope.cats.unshift(newCat);
		$scope.newCat = {};
	}

	$scope.submitComment = function() {
		$scope.comments.unshift($scope.comment.text);
		console.log('$scope.comments', $scope.comments)
		$scope.comment.text = "";
	}
}]);

app.directive('like', [function(){
	var link = function(scope, element, attrs) {
		element.bind('mousedown', function(){
			element.addClass('liked');
		})
	}
	return {
		restrict:"AE",
		link: link
	}
}])
