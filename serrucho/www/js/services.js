angular.module('starter.services', [])

.factory('allRest', function($http) {
  // Might use a resource here that returns a JSON array

  $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With']; 

    return {
        getItems : function(){
            return $http.get(apiEndpoint + '/api/Restaurants');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + '/api/Restaurants/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/Restaurants', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + '/api/Restaurants/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Restaurants/' + id
            });
        }
    };

})


.factory('myRest', function() {
  // Might use a resource here that returns a JSON array
return {
        getItems : function(){
            return $http.get(apiEndpoint + '/api/SaveRestaurants');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + '/api/SaveRestaurants/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/SaveRestaurants', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + '/api/SaveRestaurants/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/SaveRestaurants/' + id
            });
        }
    };
})

.factory('bills', function() {
  // Might use a resource here that returns a JSON array
return {
        getItems : function(){
            return $http.get(apiEndpoint + '/api/Bills');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + '/api/Bills/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/Bills', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + '/api/Bills/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Bills/' + id
            });
        }
    };
})

.factory('offers', function() {
  // Might use a resource here that returns a JSON array
return {
        getItems : function(){
            return $http.get(apiEndpoint + '/api/Offers');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + '/api/Offers/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/Offers', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + '/api/Offers/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Offers/' + id
            });
        }
    };
})


;
