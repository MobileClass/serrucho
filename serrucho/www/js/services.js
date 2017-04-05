angular.module('starter.services', [])

.factory('allRest', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rests = [{
    id: 0,
    name: 'Bondelic',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'POSTRE',
		name: 'Postres'
	}],
	menu: [{
		elId: '020',
		name: 'Pie de frutas',
		price: 320
	}, {
		elId: '019',
		name: 'Bizcocho marble',
		price: 400
	}, {
		elId: '005',
		name: 'Macarons',
		price: 130
	}]
  }, {
    id: 1,
    name: 'Carnitas',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CARNES',
		name: 'Carnes'
	}],
	menu: [{
		elId: '023',
		name: 'Hamburgesa frita',
		price: 250
	}]
  }, {
    id: 2,
    name: 'Some Thai Place',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'THAI',
		name: 'Thai'
	}],
	menu: [{
		elId: '090',
		name: 'Arroz Frito',
		price: 185
	}]
  }, {
    id: 3,
    name: 'Chao Lu',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CHINA',
		name: 'China'
	}],
	menu: [{
		elId: '',
		name: '',
		price: 0
	}]
  }, {
    id: 4,
    name: 'La cuchara de madera',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'POSTRE',
		name: 'Postres'
	}],
	menu: [{
		elId: '',
		name: '',
		price: 0
	}]
  }];

  return {
    all: function() {
      return rests;
    },
    remove: function(rest) {
      rests.splice(rests.indexOf(rest), 1);
    },
    get: function(restId) {
      for (var i = 0; i < rests.length; i++) {
        if (rests[i].id === parseInt(restId)) {
          return rests[i];
        }
      }
      return null;
    }
  };
})


.factory('myRest', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rests = [{
    id: 0,
    name: 'Bondelic',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'POSTRE',
		name: 'Postres'
	}],
	menu: [{
		elId: '020',
		name: 'Pie de frutas',
		price: 320
	}, {
		elId: '019',
		name: 'Bizcocho marble',
		price: 400
	}, {
		elId: '005',
		name: 'Macarons',
		price: 130
	}]
  }, {
    id: 1,
    name: 'Carnitas',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CARNES',
		name: 'Carnes'
	}],
	menu: [{
		elId: '023',
		name: 'Hamburgesa frita',
		price: 250
	}]
  }, {
    id: 2,
    name: 'Some Thai Place',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'THAI',
		name: 'Thai'
	}],
	menu: [{
		elId: '090',
		name: 'Arroz Frito',
		price: 185
	}]
  }, {
    id: 3,
    name: 'Chao Lu',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CHINA',
		name: 'China'
	}],
	menu: [{
		elId: '',
		name: '',
		price: 0
	}]
  }, {
    id: 4,
    name: 'La cuchara de madera',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'POSTRE',
		name: 'Postres'
	}],
	menu: [{
		elId: '',
		name: '',
		price: 0
	}]
  }];

  return {
    all: function() {
      return rests;
    },
    remove: function(rest) {
      rests.splice(rests.indexOf(rest), 1);
    },
    get: function(restId) {
      for (var i = 0; i < rests.length; i++) {
        if (rests[i].id === parseInt(restId)) {
          return rests[i];
        }
      }
      return null;
    }
  };
})

.factory('bills', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rests = [{
    id: 1,
	total: 890,
	rest: [{}],
    name: 'Bondelic',
    logo: 'img/ben.png',
	elems: [{
		elId: '020',
		name: 'Pie de frutas',
		price: 320
	}, {
		elId: '019',
		name: 'Bizcocho marble',
		price: 400
	}, {
		elId: '005',
		name: 'Macarons',
		price: 130
	}]
  }, {
    id: 1,
    name: 'Carnitas',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CARNES',
		name: 'Carnes'
	}],
	elems: [{
		elId: '023',
		name: 'Hamburgesa frita',
		price: 250
	}]
  }, {
    id: 2,
    name: 'Some Thai Place',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'THAI',
		name: 'Thai'
	}],
	elems: [{
		elId: '090',
		name: 'Arroz Frito',
		price: 185
	}]
  }, {
    id: 3,
    name: 'Chao Lu',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'CHINA',
		name: 'China'
	}],
	elems: [{
		elId: '',
		name: '',
		price: 0
	}]
  }, {
    id: 4,
    name: 'La cuchara de madera',
    lat: '',
	lon: '',
    logo: 'img/ben.png',
	category: [{
		id: 'POSTRE',
		name: 'Postres'
	}],
	elems: [{
		elId: '',
		name: '',
		price: 0
	}]
  }];

  return {
    all: function() {
      return rests;
    },
    remove: function(rest) {
      rests.splice(rests.indexOf(rest), 1);
    },
    get: function(restId) {
      for (var i = 0; i < rests.length; i++) {
        if (rests[i].id === parseInt(restId)) {
          return rests[i];
        }
      }
      return null;
    }
  };
})


;
