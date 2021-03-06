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
			// pull out customer info to return
			var customerData = {
				firstName: customer.firstName,
				lastName: customer.lastName,
				addressLine1: customer.addressLine1,
				addressLine2: customer.addressLine2,
				city: customer.addressCity,
				state: customer.addressState,
				zip: customer.addressZip,
				phone: customer.phone,
				email: customer.email
			};

			//Fake checkout service
			var response = {
				status: "success",
				items: this.getCart(),
				total: this.cartTotal(),
				customer: customerData
			};

			//would normally send a request to server to
			//process transaction
			this.emptyCart();

			return response;

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
