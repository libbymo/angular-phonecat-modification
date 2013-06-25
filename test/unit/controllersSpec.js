'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
	
	beforeEach(function() {
		this.addMatchers({
			toEqualData: function(expected) {
				// Jasmine matcher function recieves this.actual
				return angular.equals(this.actual, expected);
			}
		});
	});
	
	beforeEach(module('phonecatServices'));

  describe('PhoneListCtrl', function(){
	  var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/phones.json').
				respond([{name: 'Nexus S'}, {name:'Motorola DROID'}]);

			scope = $rootScope.$new();
			ctrl = $controller(PhoneListCtrl, {$scope: scope});

		}));

    it('should create "phones" model with 2 phones from xhr', function() {
			expect(scope.phones).toEqual([]);
			
			// This causes the promise returned by the $http service to be resolved with the trained response.
			$httpBackend.flush();
			
      expect(scope.phones).toEqualData([{name: 'Nexus S'},
																		{name: 'Motorola DROID'}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });

  });

	describe('PhoneDetailCtrl', function() {
		var scope, ctrl, $httpBackend,
				xyzPhoneData = function() {
					return {
						name: "phone xyz",
            images: ['image/url1.png', 'image/url2.png']
					}
				};
	  
		// could this be abstracted out of the describe blocks? to execute before each 
		// controller test?
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $routeParams) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());
			
			
			$routeParams.phoneId = 'xyz'
			
			scope				 = $rootScope.$new();
			ctrl				 = $controller(PhoneDetailCtrl, {$scope: scope});
						
		}));
		
		it('should return a specific phone as dictated by the url', function() {
			expect(scope.phone).toEqualData({});
			
			$httpBackend.flush();
			
			expect(scope.phone).toEqualData(xyzPhoneData());
		}) 
		
	});
	
});
