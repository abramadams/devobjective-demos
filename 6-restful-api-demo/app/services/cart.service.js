(function(){
	'use strict';

	angular.module( 'app.services.cart', [ 'angularLocalStorage' ] )
		.factory( 'cartService', cartService );

	cartService.$inject = [ 'storage' ];

	/* @ngInject */
	function cartService( storage ){

		var itemsStore = 'devObjectiveDemo';// should abstract via "constant"

		if( !( storage.get( itemsStore ) instanceof Array ) ){
			storage.set( itemsStore, [] );
		}
		var baseUrl = 'http://devobjective.demo/api/index.cfm';

		return {
			itemsStore: itemsStore,
			getCart: getCart,
			addItem: addItem,
			removeItem: removeItem,
			getItem: getItem,
			getItemIndex: getItemIndex,
			getItemById: getItemById,
			updateQuantity: updateQuantity,
			totalItems: totalItems,
			totalQuantity: totalQuantity,
			cartTotal: cartTotal,
			emptyCart: emptyCart,
			checkout: checkout,
			getStates: getStates

		};

		//////////////////////////////
		// Implementation details
		//////////////////////////////

		function getCart(){
			var cart = storage.get( this.itemsStore );
			for( var i = 0; i < cart.length; i++ ){
				cart[ i ].quantity = parseInt( cart[ i ].quantity, 10 );
			}
			return cart;
		}

		function addItem( item, quantity ){
			if( quantity === undefined ){
				quantity = 1;
			}
			var items = storage.get( this.itemsStore );

			items.push( {
				id: item.id,
				name: item.name,
				quantity: parseInt( quantity, 10 ),
				price: parseFloat( item.price ),
				image: item.image,
				thumbnail: item.thumbnail,
				description: item.description
			} );

			storage.set( this.itemsStore, items );

			return items.length - 1;
		}

		function removeItem( index ){
			var items = storage.get( this.itemsStore );
			items.splice( index, 1 );
			storage.set( this.itemsStore, items );
		}

		function getItem( index ){
			var items = storage.get( this.itemsStore );

			items[ index ].quantity = parseInt( items[ index ].quantity, 10 );
			return items[ index ];

		}

		function getItemIndex( itemId ){
			var items = storage.get( this.itemsStore );

			for( var i = 0; i < items.length; i++ ){

				if( items[ i ].id == itemId ){
					return i;
				}
			}

			return undefined;
		}

		function getItemById( itemId ){
			var items = storage.get( this.itemsStore ), item = {};

			item = items[ this.getItemIndex( itemId ) ];

			return item || undefined;

		}

		function updateQuantity( index, quantity ){
			var items = storage.get( this.itemsStore );

			items[ index ].quantity = parseInt( quantity, 10 );
			items[ index ].price = parseFloat( items[ index ].price );
			storage.set( this.itemsStore, items );
		}

		function totalItems(){
			var items = storage.get( this.itemsStore ) || [];

			return items.length;
		}

		function totalQuantity(){
			var quantity = 0, items = storage.get( this.itemsStore ) || [];

			for( var i = 0; i < items.length; i++ ){
				quantity += parseInt( items[ i ].quantity, 10 );
			}

			return quantity;
		}

		function cartTotal(){
			var total = 0, items = storage.get( this.itemsStore );

			for( var i = 0; i < items.length; i++ ){
				total += parseInt( items[ i ].quantity, 10 ) * parseFloat( items[ i ].price );
			}
			return parseFloat( total );
		}

		function emptyCart(){
			storage.remove( this.itemsStore );
			storage.set( this.itemsStore, [] );
		}

		function checkout( customer ){
			var self = this;
			return $http( {
				method: 'post',
				url: baseUrl + '/checkout',
				data: {
					cart: {
						items: this.getCart(),
						total: this.cartTotal()
					},
					customer: customer
				}
			} ).success( function( data, status, headers, config ){
				// this callback will be called asynchronously
				// when the response is available
				self.emptyCart();
				return data;
			} ).error( function( data, status, headers, config ){
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				//alert( status );
				console.warn( data, status, headers, config );
				return data;
			} );

		}

		function getStates(){
			return [ {
				         "name": "Alabama",
				         "abbreviation": "AL"
			         }, {
				         "name": "Alaska",
				         "abbreviation": "AK"
			         }, {
				         "name": "American Samoa",
				         "abbreviation": "AS"
			         }, {
				         "name": "Arizona",
				         "abbreviation": "AZ"
			         }, {
				         "name": "Arkansas",
				         "abbreviation": "AR"
			         }, {
				         "name": "California",
				         "abbreviation": "CA"
			         }, {
				         "name": "Colorado",
				         "abbreviation": "CO"
			         }, {
				         "name": "Connecticut",
				         "abbreviation": "CT"
			         }, {
				         "name": "Delaware",
				         "abbreviation": "DE"
			         }, {
				         "name": "District Of Columbia",
				         "abbreviation": "DC"
			         }, {
				         "name": "Federated States Of Micronesia",
				         "abbreviation": "FM"
			         }, {
				         "name": "Florida",
				         "abbreviation": "FL"
			         }, {
				         "name": "Georgia",
				         "abbreviation": "GA"
			         }, {
				         "name": "Guam",
				         "abbreviation": "GU"
			         }, {
				         "name": "Hawaii",
				         "abbreviation": "HI"
			         }, {
				         "name": "Idaho",
				         "abbreviation": "ID"
			         }, {
				         "name": "Illinois",
				         "abbreviation": "IL"
			         }, {
				         "name": "Indiana",
				         "abbreviation": "IN"
			         }, {
				         "name": "Iowa",
				         "abbreviation": "IA"
			         }, {
				         "name": "Kansas",
				         "abbreviation": "KS"
			         }, {
				         "name": "Kentucky",
				         "abbreviation": "KY"
			         }, {
				         "name": "Louisiana",
				         "abbreviation": "LA"
			         }, {
				         "name": "Maine",
				         "abbreviation": "ME"
			         }, {
				         "name": "Marshall Islands",
				         "abbreviation": "MH"
			         }, {
				         "name": "Maryland",
				         "abbreviation": "MD"
			         }, {
				         "name": "Massachusetts",
				         "abbreviation": "MA"
			         }, {
				         "name": "Michigan",
				         "abbreviation": "MI"
			         }, {
				         "name": "Minnesota",
				         "abbreviation": "MN"
			         }, {
				         "name": "Mississippi",
				         "abbreviation": "MS"
			         }, {
				         "name": "Missouri",
				         "abbreviation": "MO"
			         }, {
				         "name": "Montana",
				         "abbreviation": "MT"
			         }, {
				         "name": "Nebraska",
				         "abbreviation": "NE"
			         }, {
				         "name": "Nevada",
				         "abbreviation": "NV"
			         }, {
				         "name": "New Hampshire",
				         "abbreviation": "NH"
			         }, {
				         "name": "New Jersey",
				         "abbreviation": "NJ"
			         }, {
				         "name": "New Mexico",
				         "abbreviation": "NM"
			         }, {
				         "name": "New York",
				         "abbreviation": "NY"
			         }, {
				         "name": "North Carolina",
				         "abbreviation": "NC"
			         }, {
				         "name": "North Dakota",
				         "abbreviation": "ND"
			         }, {
				         "name": "Northern Mariana Islands",
				         "abbreviation": "MP"
			         }, {
				         "name": "Ohio",
				         "abbreviation": "OH"
			         }, {
				         "name": "Oklahoma",
				         "abbreviation": "OK"
			         }, {
				         "name": "Oregon",
				         "abbreviation": "OR"
			         }, {
				         "name": "Palau",
				         "abbreviation": "PW"
			         }, {
				         "name": "Pennsylvania",
				         "abbreviation": "PA"
			         }, {
				         "name": "Puerto Rico",
				         "abbreviation": "PR"
			         }, {
				         "name": "Rhode Island",
				         "abbreviation": "RI"
			         }, {
				         "name": "South Carolina",
				         "abbreviation": "SC"
			         }, {
				         "name": "South Dakota",
				         "abbreviation": "SD"
			         }, {
				         "name": "Tennessee",
				         "abbreviation": "TN"
			         }, {
				         "name": "Texas",
				         "abbreviation": "TX"
			         }, {
				         "name": "Utah",
				         "abbreviation": "UT"
			         }, {
				         "name": "Vermont",
				         "abbreviation": "VT"
			         }, {
				         "name": "Virgin Islands",
				         "abbreviation": "VI"
			         }, {
				         "name": "Virginia",
				         "abbreviation": "VA"
			         }, {
				         "name": "Washington",
				         "abbreviation": "WA"
			         }, {
				         "name": "West Virginia",
				         "abbreviation": "WV"
			         }, {
				         "name": "Wisconsin",
				         "abbreviation": "WI"
			         }, {
				         "name": "Wyoming",
				         "abbreviation": "WY"
			         } ];
		}

	}
})();
