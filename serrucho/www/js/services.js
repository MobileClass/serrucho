angular.module('starter.services', [])

.factory('allRest', function() {
  // Might use a resource here that returns a JSON array

  var rests = [{
		ID = 01,
		Name = 'Seven Dips',
		Min = '18.487470',
		Max = '-69.961870',
		MenuItem = [{
					ID = 01,
					Name = "Seven Dips",
					Price = 175.50
				}, 
				{
					ID = 02,
					Name = "Seven Dips",
					Price = 280.90
				}]
	}, 
	{
		ID = 02,
		Name = 'Madera Steak House',
		Min = '18.480734',
		Max = '-69.962976',
		MenuItem = [{
					ID = 01,
					Name = "Seven Dips",
					Price = 175.50,
					RestaurantID = 01
				}, 
				{
					ID = 02,
					Name = "Seven Dips",
					Price = 280.90,
					RestaurantID = 02
				}, 
				{
					ID = 03,
					Name = "Seven Dips",
					Price = 300.00,
					RestaurantID = 03
				}]
	}, 
	{
		ID = 03,
		Name = 'Gastronomia mexicana',
		Min = '18.485616',
		Max = '-69.943639',
		MenuItem = [{
					ID = 02,
					Name = "Seven Dips",
					Price = 280.90,
					RestaurantID = 02
				}, 
				{
					ID = 04,
					Name = "Seven Dips",
					Price = 400.25,
					RestaurantID = 04
				}, 
				{
					ID = 05,
					Name = "Seven Dips",
					Price = 500.00,
					RestaurantID = 05
				}]
	}, 
	{
		ID = 04,
		Name = 'Barra Payan',
		Min = '18.488409',
		Max = '-69.945130',
		MenuItem = [{
					ID = 01,
					Name = "Seven Dips",
					Price = 175.50,
					RestaurantID = 01
				}, 
				{
					ID = 02,
					Name = "Seven Dips",
					Price = 280.90,
					RestaurantID = 02
				}, 
				{
					ID = 04,
					Name = "Seven Dips",
					Price = 400.25,
					RestaurantID = 04
				}, 
				{
					ID = 06,
					Name = "Seven Dips",
					Price = 180.50,
					RestaurantID = 06
				}]
	}, 
	{
		ID = 05,
		Name = 'Pizzareli Proceres',
		Min = '18.487067',
		Max = '-69.942540',
		MenuItem = [{
					ID = 01,
					Name = "Seven Dips",
					Price = 175.50,
					RestaurantID = 01
				}, 
				{
					ID = 05,
					Name = "Seven Dips",
					Price = 500.00,
					RestaurantID = 05
				}
				, 
				{
					ID = 06,
					Name = "Seven Dips",
					Price = 180.50,
					RestaurantID = 06
				}]
	}];

	return {
        getItems : function(){
            return rests;
        },
        getItem : function(id){
			var items = [];
			for (var index = 0; index < rests.length; index++) {
				if (rests[index].ID == id) {
					items[index] = rests[index].ID;
				}
				
			}
            return items;
        }
    };

 /* $http.defaults.useXDomain = true;
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
    };*/

})


// .factory('myRest', function() {
//   // Might use a resource here that returns a JSON array
// /*return {
//         getItems : function(){
//             return $http.get(apiEndpoint + '/api/SaveRestaurants');
//         },
//         getItem : function(id){
//             return $http.get(apiEndpoint + '/api/SaveRestaurants/' + id);
//         },
//         postItem : function(item){
//             return $http.post(apiEndpoint + '/api/SaveRestaurants', item);
//         },
//         putItem : function(item){
//             return $http.put(apiEndpoint + '/api/SaveRestaurants/', item);
//         },
//         deleteItem : function(id){
//             return $http({
//                 method: 'DELETE',
//                 url: apiEndpoint + '/api/SaveRestaurants/' + id
//             });
//         }
//     };*/
// })

// .factory('bills', function() {
//   // Might use a resource here that returns a JSON array
// /*return {
//         getItems : function(){
//             return $http.get(apiEndpoint + '/api/Bills');
//         },
//         getItem : function(id){
//             return $http.get(apiEndpoint + '/api/Bills/' + id);
//         },
//         postItem : function(item){
//             return $http.post(apiEndpoint + '/api/Bills', item);
//         },
//         putItem : function(item){
//             return $http.put(apiEndpoint + '/api/Bills/', item);
//         },
//         deleteItem : function(id){
//             return $http({
//                 method: 'DELETE',
//                 url: apiEndpoint + '/api/Bills/' + id
//             });
//         }
//     };*/
// })

// .factory('offers', function() {
//   // Might use a resource here that returns a JSON array
// /*return {
//         getItems : function(){
//             return $http.get(apiEndpoint + '/api/Offers');
//         },
//         getItem : function(id){
//             return $http.get(apiEndpoint + '/api/Offers/' + id);
//         },
//         postItem : function(item){
//             return $http.post(apiEndpoint + '/api/Offers', item);
//         },
//         putItem : function(item){
//             return $http.put(apiEndpoint + '/api/Offers/', item);
//         },
//         deleteItem : function(id){
//             return $http({
//                 method: 'DELETE',
//                 url: apiEndpoint + '/api/Offers/' + id
//             });
//         }
//     };*/
// })


;
