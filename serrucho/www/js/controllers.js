angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, offers) {})

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
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        var markerMSH = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.480734, -69.962976)
        });

        var markerSD = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.487470, -69.961870)
        });

        var markerGM = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.485616, -69.943639)
        });

        var markerBP = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.488409, -69.945130)
        });

        var markerPL = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.487067, -69.942540)
        });

        var markerPP = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(18.485999, -69.966601)
        });



        var sevenDips = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Seven Dips</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Seven Dips</b>, un establecimiento de comida variada ' +
          'donde podremos encontrar un menu que va desde comida rapida '+
          'hasta pastas y comida "light" como es la pechuga de pollo. '+

          '</div>'+
          '</div>';

        var maderaSH = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Madera Steak House</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Madera Stake House</b>, este restaurante cuenta con ' +
          'deliciosos cortes de carne en diferentes presentaciones '+
          'desde hamburguesas hasta churrasco Angus. '+

          '</div>'+
          '</div>';

        var gastroMX = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Gastronomia Mexicana</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Gastronomia Mexicana</b>, de nuestra seleccion de resaurantes ' +
          'favoritos, lo mejor de la cocina mexicana, fiel a las recetas '+
          'del pais, diversos y sabrosos platillos junto a ricas bebidas. '+

          '</div>'+
          '</div>';

        var barraPayan= '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Barra Payan</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Barra Payan</b>, nombre insignia de los famosos sandwiches, ' +
          'en esta sucursal se preserva el sabor original de sus sabrosos '+
          'emparedados y jugosas batidas de frutas. '+

          '</div>'+
          '</div>';

        var pizzareli = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Pizzareli</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Pizzarelli</b>, en cuanto a pizza se refiere la mejor eleccion ' +
          'un negocio dominicano con el mas puro sabor italiano '+
          'diferentes pizzas, calzones, breadsticks y bebidas. '+

          '</div>'+
          '</div>';

        var plazaPollo = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Plaza del pollo</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Plaza del pollo</b>, Pollo frito en diferentes presentaciones ' +
          'desde piezas enteras hasta pechurina, guarniciones como papas fritas '+
          'y platanos fritos, en un limpio y elegante establecimiento. '+

          '</div>'+
          '</div>';

        var infoWindow = new google.maps.InfoWindow({
          content: maderaSH
        });


        var infoWindow2 = new google.maps.InfoWindow({
          content: sevenDips
        });

        var infoWindow3 = new google.maps.InfoWindow({
          content: gastroMX
        });

        var infoWindow4 = new google.maps.InfoWindow({
          content: barraPayan
        });
        var infoWindow5 = new google.maps.InfoWindow({
          content: pizzareli
        });
        var infoWindow6 = new google.maps.InfoWindow({
          content: plazaPollo
        });


        google.maps.event.addListener(markerMSH, 'click', function () {
          infoWindow.open($scope.map, markerMSH);
        });

        google.maps.event.addListener(markerSD, 'click', function () {
          infoWindow2.open($scope.map, markerSD);
        });

        google.maps.event.addListener(markerGM, 'click', function () {
          infoWindow3.open($scope.map, markerGM);
        });

        google.maps.event.addListener(markerBP, 'click', function () {
          infoWindow4.open($scope.map, markerBP);
        });

        google.maps.event.addListener(markerPL, 'click', function () {
          infoWindow5.open($scope.map, markerPL);
        });

        google.maps.event.addListener(markerPP, 'click', function () {
          infoWindow6.open($scope.map, markerPP);
        });


      });
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
	// console.log(allRest.all());
	$scope.allRests = allRest.getItems();
	$scope.restItems = [];
	$ionicModal.fromTemplateUrl('templates/modal_menu.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(id) {
	$scope.restItems = allRest.getItem(id);
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
