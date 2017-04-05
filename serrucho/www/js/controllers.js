angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicPlatform, $ionicLoading, $ionicPopup) {
	var options = {timeout: 20000, enableHighAccuracy: true, maximumAge: 0};

	$ionicLoading.show({
		template: '<ion-spinner icon="ripple"></ion-spinner><br/>Cargando ubicación!'
	});
	console.log('Init');

	ionic.Platform.ready(function(){

		$cordovaGeolocation.getCurrentPosition(options).then(function(position){
			console.log('enter geolocation');
			var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			console.log('Before options');
			var mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			console.log('After options');
			$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
			console.log('Map: '+$scope.map);

			$ionicLoading.hide();

		}, function(error){
			console.log(error);
			$ionicLoading.hide();
			var content;
			switch (error.code) {
				case error.PERMISSION_DENIED:
					content = "Se ha negado la petición de usuario para Geoubicación."
					break;
				case error.POSITION_UNAVAILABLE:
					content = "La información de ubicación no esta disponible."
					break;
				case error.TIMEOUT:
					content = "El tiempo de espera ha expirado."
					break;
				case error.UNKNOWN_ERROR:
					content = "A ocurrido un error desconocido."
					break;
			}
			$ionicPopup.confirm({
				title: "GPS Error",
				cssClass: "background-color: #4BAF33",
				content: content
			});
		})
	});
})

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
  
//   $scope.$on('$ionicView.enter', function(e) {
//   });

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('RestCtrl', function($scope) {})

.controller('MisRestCtrl', function($scope, $ionicModal, myRest) {
	$ionicModal.fromTemplateUrl('templates/modal_menu.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.acept = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})


.controller('AllRestCtrl', function($scope, $ionicModal, allRest) {
	console.log(allRest.all());
	$ionicModal.fromTemplateUrl('templates/modal_menu.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.acept = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})



.controller('BillsRestCtrl', function($scope, $ionicModal, bills) {
	$ionicModal.fromTemplateUrl('templates/modal_bill.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.acept = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('PresCtrl', function($scope) {})

;
