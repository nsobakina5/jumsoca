/* --------------------------- Onthemes JS ------------------------------ */
$(document).ready(function () {
	/* Start Homepage tab JS */
		$('.tab-content > div:first-child').addClass('active');
	/* End Homepage tab JS  */
	
	/* Start Go to Top JS */
		$("#goToTop").hide();
		$(function () {
			$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#goToTop').fadeIn();
			} else {				
				$('#goToTop').fadeOut();			
			}	
		});	
		// scroll body to 0px on click
		$('#goToTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
				}, 1000);
				return false;
			});
		});
	/* End Go to Top JS */


	/* Search */
		
		$(".otsearch_button").click(function() {
			$('.otsearchtoggle').parent().toggleClass('active');
				$('.otsearchtoggle').toggle('fast', function() {
			});
			$('#search_query_top').attr('autofocus', 'autofocus').focus();
		});
	
	/* carousel For FeatureProduct */
		 
		var otfeature = $("#otfeature-carousel");
		otfeature.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otfeature_next").click(function(){
			otfeature.trigger('owl.next');
		})
		$(".otfeature_prev").click(function(){
			otfeature.trigger('owl.prev');
		})

	/* carousel For NewProduct */

		var otnewproduct = $("#otnewproduct-carousel");
		otnewproduct.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});		
		// Custom Navigation Events
		$(".otnewproduct_next").click(function(){
			otnewproduct.trigger('owl.next');
		})
		$(".otnewproduct_prev").click(function(){
			otnewproduct.trigger('owl.prev');
		})

	/* carousel For SpecialProduct */
	
		var otspecial = $("#otspecial-carousel");
		otspecial.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otspecial_next").click(function(){
			otspecial.trigger('owl.next');
		})
		$(".otspecial_prev").click(function(){
			otspecial.trigger('owl.prev');
		})

	/* carousel For SpecialProduct */
	
		var otbestseller = $("#otbestseller-carousel");
		otbestseller.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otbestseller_next").click(function(){
			otbestseller.trigger('owl.next');
		})
		$(".otbestseller_prev").click(function(){
			otbestseller.trigger('owl.prev');
		})

	/* carousel For Productscategory */

		var otproductscategory = $("#otproductscategory-carousel");
		otproductscategory.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otproductscategory_next").click(function(){
			otproductscategory.trigger('owl.next');
		})
		$(".otproductscategory_prev").click(function(){
			otproductscategory.trigger('owl.prev');
		})

	/* carousel For AccessoriesProduct */

		var otaccessories = $("#otaccessories-carousel");
		otaccessories.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otaccessories_next").click(function(){
			otaccessories.trigger('owl.next');
		})
		$(".otaccessories_prev").click(function(){
			otaccessories.trigger('owl.prev');
		})	

	/* carousel For Order page Cross-selling */
	
	var otordercrossselling = $("#order #otcrossselling-carousel");
	  otordercrossselling.owlCarousel({
		 items : 3, //10 items above 1000px browser width
		 itemsDesktop : [1200,3], 
		 itemsDesktopSmall : [991,2], 
		 itemsTablet: [767,2], 
		 itemsMobile : [480,1] 
	  });
	  // Custom Navigation Events
	  $(".otcrossselling_next").click(function(){
	otordercrossselling.trigger('owl.next');
	  })
	  $(".otcrossselling_prev").click(function(){
	otordercrossselling.trigger('owl.prev');
	  });
	  
	/* carousel For Cross-selling */

		var otcrossselling = $("#otcrossselling-carousel");
		otcrossselling.owlCarousel({
			items : 4,
			itemsDesktop : [1200,4], 
			itemsDesktopSmall : [991,3], 
			itemsTablet: [767,2], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otcrossselling_next").click(function(){
			otcrossselling.trigger('owl.next');
		})
		$(".otcrossselling_prev").click(function(){
			otcrossselling.trigger('owl.prev');
		})

	/* carousel For Testimonial */

		var ottestimonial = $("#ottestimonial-carousel");
		ottestimonial.owlCarousel({
			pagination : true,
			paginationNumbers : true,
			autoPlay : true,
			items : 1,
			itemsDesktop : [1200,1], 
			itemsDesktopSmall : [991,1], 
			itemsTablet: [767,1], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".ottestimonial_next").click(function(){
			ottestimonial.trigger('owl.next');
		})
		$(".ottestimonial_prev").click(function(){
			ottestimonial.trigger('owl.prev');
		})

	/* carousel For Brandlogo */

	var otbrandlogo = $("#otbrandlogo-carousel");
	otbrandlogo.owlCarousel({
		items : 5,
		itemsDesktop : [1200,5], 
		itemsDesktopSmall : [991,4], 
		itemsTablet: [767,3], 
		itemsMobile : [480,2] 
	});
	// Custom Navigation Events
	$(".otbrandlogo_next").click(function(){
		otbrandlogo.trigger('owl.next');
	})
	$(".otbrandlogo_prev").click(function(){
		otbrandlogo.trigger('owl.prev');
	})

	/* carousel For SmartBlog */

		var otblog = $("#otsmartblog-carousel");
		otblog.owlCarousel({
			items : 1,
			itemsDesktop : [1200,1], 
			itemsDesktopSmall : [991,1], 
			itemsTablet: [767,1], 
			itemsMobile : [480,1] 
		});
		// Custom Navigation Events
		$(".otblog_next").click(function(){
			otblog.trigger('owl.next');
		})
		$(".otblog_prev").click(function(){
			otblog.trigger('owl.prev');
		})
});	  


function responsivecolumn()
{
	if ($(document).width() <= 991)
	{
		$('.container #columns_inner #left_column').appendTo('.container #columns_inner');
	}
	else if($(document).width() >= 992)
	{
		$('.container #columns_inner #left_column').prependTo('.container #columns_inner');
	}
}
$(document).ready(function(){responsivecolumn();});
$(window).resize(function(){responsivecolumn();});


function userinfotoggle()
{
	if ($(document).width() <= 991)
	{
		$('.header_user_info').prependTo('.otpermanent-link #header_links');
	}
	else if($(document).width() >= 991)
	{
		
		$('.header_user_info').appendTo('#header .nav nav');
	}
}
$(document).ready(function(){userinfotoggle();});
$(window).resize(function(){userinfotoggle();});


/* --------------------------- End Onthemes JS ------------------------------ */
