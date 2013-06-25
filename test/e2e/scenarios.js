'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat app', function() {
	
	describe('Phone list view', function() {
		
		beforeEach(function() {
			browser().navigateTo('../../app/index.html');
		});
		
		it('should filter the phone list as a user types into the search box', function() {
			expect(repeater('.phones li').count()).toBe(20);
			
			input('query').enter('nexus');
			expect(repeater('.phones li').count()).toBe(1);
			
			input('query').enter('motorola');
			expect(repeater('.phones li').count()).toBe(8);
		});
		// 
		// it('should say Hello World', function() {
		// 	expect(element('.hello').html()).toBe("Hello World");
		// });
		// 
		// it('should say in output div, what is typed into the query input', function() {
		// 	input('query').enter('hello');
		// 	
		// 	expect(element('#output').text()).toMatch('hello');
		// });
		// 
    it('should allow the user to set sort order', function() {
	    input('query').enter('tablet');

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);
	
			select('orderProp').option('Alphabetical')
      expect(repeater('.phones li', 'Phone List').column('phone.name')).
					toEqual(["MOTOROLA XOOM\u2122",
									 "Motorola XOOM\u2122 with Wi-Fi"]);
    });
		
		it('should render phone specific links', function(){
			input('query').enter('nexus');
			element('.phones li a').click();
			expect(browser().location().url()).toBe('/phones/nexus-s');

		})
		
	}); // end Phone List View
	
	
	describe('Phone Detail View', function(){
		
		beforeEach(function() {
			browser().navigateTo('../../app/index.html#/phones/nexus-s');
		});
		
		it('should display nexus-s page', function() {
	      expect(binding('phone.name')).toBe('Nexus S');
	  });
	
		it('should display four thumbnail images on the nexus-s page', function() {
			expect(element('.phone-thumbs li img').count()).toBe(4);
		});
		
		it('should display the first phone in the list on page load', function() {
			expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
		});
		
		it('should display the image as the main image, when user clicks thumbnail', function() {
			element('.phone-thumbs li:nth-child(3) img').click();
			expect(element('.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');
		});
		
	}); // end Phone Detail View
	
});
