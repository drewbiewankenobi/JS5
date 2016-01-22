angular.module('myApp',[])

angular.module('myApp').controller('bodyMaster', [
		'$scope', function($scope){
			$scope.header = 'This is Your Profile';
			$scope.hideMe = [
					true,
					true,
				]
			console.log($scope.hideMe)
			
			$scope.lineMaker= function(event, ind) {
				console.log("you're a clicker")
				$scope.hideMe[ind] = !$scope.hideMe[ind];
				}
			
			$scope.namePlacer = function(event) {
				$scope.name = $scope.myName
				$scope.myName = ''
			}
			$scope.genderPlacer = function(event) {
				$scope.gender = $scope.myGender
				$scope.myGender = ''
				console.log($scope.gender)
			}
					}])