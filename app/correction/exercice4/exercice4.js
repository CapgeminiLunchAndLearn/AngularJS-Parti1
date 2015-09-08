(function () {
  'use strict';
  angular.module('LunchAndLearnApp').controller('Exercice4Ctrl', function ($scope) {
		// Initialise la variable d'affichage du bloc à faux par défaut
		$scope.isDisplay = false;
		
		// Ajout d'une fonction pour mettre la variable d'affichage du bloc à vrai
		$scope.afficherElement = function(){
			$scope.isDisplay = true;
		};
  });
})();
