angular.module('starter.services', [])

.factory('users', function($http) {
  // Might use a resource here that returns a JSON array
  	$http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];
	$http.defaults.headers.get = { 'Accept' : 'application/json' }

	return {
		getConfig : function(){
			return $http.get('userData.json');
        },
        updateConfig : function(config){
            return $http.put('userData.json', config);
        },
        getUser : function(id){
            return $http.get(apiEndpoint + '/api/Users/' + id);
        },
        postUser : function(name){
            return $http.post(apiEndpoint + '/api/Users/'+ name);
        },
        putUser : function(item){
            return $http.put(apiEndpoint + '/api/Users/' + item.ID, item);
        },
        deleteUser : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Users/' + id
            });
        }
    };
})

.factory('allRest', function($http) {
  // Might use a resource here that returns a JSON array

	$http.defaults.useXDomain = true;
	delete $http.defaults.headers.common['X-Requested-With'];
	$http.defaults.headers.get = { 'Accept' : 'application/json' } 

	var userConfig = {};
	$http.get('userData.json').success(function (config) {
		userConfig = config;
	});

	return {
		getAll : function(){
			return $http.get(apiEndpoint + '/api/Restaurants');
		},
		getRest : function(restId){
			return $http.get(apiEndpoint + '/api/Restaurants/' + restId);
		},
		getMenu : function(restId){
			return $http.get(apiEndpoint + '/api/Menus/' + restId);
		}/*,
		postSaveRest : function(restId){
			return $http.post(apiEndpoint + '/api/SaveRestaurants/' + userConfig.ID + '/' + restId);
		},
		deleteSaveRest : function(restId){
			return $http({
				method: 'DELETE',
				url: apiEndpoint + '/api/SaveRestaurants/' + userConfig.ID + '/' + restId
			});
		}*/
	};

})

.factory('myRest', function($http) {
  // Might use a resource here that returns a JSON array
	$http.defaults.useXDomain = true;
	delete $http.defaults.headers.common['X-Requested-With'];
	$http.defaults.headers.get = { 'Accept' : 'application/json' }

	var userConfig = {};
	$http.get('userData.json').success(function (config) {
		userConfig = config;
	});

	return {
		/*getItem : function(){
			return $http.get(apiEndpoint + '/api/SaveRestaurants);
		},*/
		getSaveRests : function(){
			return $http.get(apiEndpoint + '/api/SaveRestaurants/' + userConfig.ID);
		},
		postSaveRest : function(restId){
			return $http.post(apiEndpoint + '/api/SaveRestaurants/' + userConfig.ID + '/' + restId);
		},
		deleteSaveRest : function(restId){
			return $http({
				method: 'DELETE',
				url: apiEndpoint + '/api/SaveRestaurants/' + userConfig.ID + '/' + restId
			});
		}
	};
})

.factory('bills', function($http) {
  // Might use a resource here that returns a JSON array
	$http.defaults.useXDomain = true;
	delete $http.defaults.headers.common['X-Requested-With'];
	$http.defaults.headers.get = { 'Accept' : 'application/json' }

	var userConfig = {};
	$http.get('userData.json').success(function (config) {
		userConfig = config;
	});

	return {
		/*getItems : function(){
			return $http.get(apiEndpoint + '/api/Bills');
		},*/
		getBills : function(){
			return $http.get(apiEndpoint + '/api/Bills/' + userConfig.ID);
		},
		postBill : function(id, name, total, items){
			return $http.post(apiEndpoint + '/api/Bills/' + id + '/' + userConfig.ID + '/' + name + '/' + total, items);
		},
		putBill : function(item){
			return $http.put(apiEndpoint + '/api/Bills/' + item.id, item);
		},
		deleteBill : function(id){
			return $http({
				method: 'DELETE',
				url: apiEndpoint + '/api/Bills/' + id
			});
		},
		getBillMenu : function(id){
			return $http.get(apiEndpoint + '/api/BillMenu/' + id);
		},
		postBillMenu : function(id, billId, menuId){
			return $http.post(apiEndpoint + '/api/BillMenu/' + id + '/' + billId + '/' + menuId);
		},
		deleteBillMenu : function(billId, menuId){
			return $http({
				method: 'DELETE',
				url: apiEndpoint + '/api/BillMenu/' + billId + '/' + menuId
			});
		}
	};
})

.factory('offers', function($http) {
	
	$http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];
	$http.defaults.headers.get = { 'Accept' : 'application/json' }
	
	return {
        getOffers : function(){
            return $http.get(apiEndpoint + '/api/Offers');
        },
        getOffer : function(id){
            return $http.get(apiEndpoint + '/api/Offers/' + id);
        }
		/*,
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/Offers', item);
        },
        putItem : function(id, item){
            return $http.put(apiEndpoint + '/api/Offers/' + id, item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Offers/' + id
            });
        }*/
    };
})


;
