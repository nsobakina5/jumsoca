/**
 * NOTICE OF LICENSE
 *
 * This file is licenced under the Software License Agreement.
 * With the purchase or the installation of the software in your application
 * you accept the licence agreement.
 *
 * You must not modify, adapt or create derivative works of this source code
 *
 * @author    Musaffar Patel
 * @copyright 2016-2019 Musaffar Patel
 * @license   LICENSE.txt
 */

FPGProductController = function() {
    self.init = this;
    self.$wrapper = $("#fpg-widget-wrapper");
	self.update_mode = 'ajax';
	self.added = false;

	/**
	 * get the parent product selected IPA
 	 */
	self.getSelectedProductIPA = function() {
		if ($("#attributes").length > 0) {
			findCombination();
		}
		return $('#idCombination').val();
	};

	/**
	 * Get IDs of the selected gifts
 	 * @returns {*}
	 */
	self.getSelectedGiftIds = function() {
		var gift_ids = [];
		var ipa = '';
		var id_gift = 0;
		if (fpg_product_options.total_qty_per_product > 1) {
			self.$wrapper.find(".fpg_product.selected").each(function () {
				gift_ids.push($(this).attr("id") + ':' + $(this).find("select[name='fpg_ipa']").val());
			});
			id_gift = gift_ids.join(',');
		} else {
			$fpg_selected = self.$wrapper.find(".fpg_product.selected");
			if ($fpg_selected.length == 0) {
				return false;
			}
			id_gift = $fpg_selected.attr("id");
			ipa = $fpg_selected.find("select[name='fpg_ipa']").val();
		}

		var return_obj = {
			'id_gift' : id_gift,
			'ipa': ipa
		};
		return return_obj;
	};

    self.addFPGToCart = function() {
		qty = $("#quantity_wanted").val();
		var selected_ids = self.getSelectedGiftIds();

		if (typeof(ipa) === 'undefined') ipa = '';
		if (typeof(qty) === 'undefined') qty = 1;		

        $.ajax({
            type: 'POST',
            headers: { "cache-control": "no-cache" },
            url: baseDir + 'modules/freeproductgifts/ajax.php?rand=' + new Date().getTime() + '&src=ajaxadd',
            async: true,
            cache: false,
            //dataType : "json",
            data: 'id_gift='+ selected_ids['id_gift']+"&ipa="+ selected_ids['ipa']+"&id_product="+id_product+"&qty="+qty+"&fpg_id_product_attribute_parent="+ $('#idCombination').val(),
            complete: function(jsonData,textStatus,jqXHR) {
            },
            success: function(jsonData,textStatus,jqXHR) {
				self.added = false;
				ajaxCart.refresh();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    };

	/**
	 * Called when the selection of gift or Gift IPA changes
 	 */
    self.onSelectedGiftChange = function() {
    	var selected_gifts = self.getSelectedGiftIds();
    	if (typeof selected_gifts.id_gift == 0) {
    		return false;
		}
    	$("form#buy_block").find("input#id_gift").val(selected_gifts.id_gift);
		$("form#buy_block").find("input#id_gift_ipa").val(selected_gifts.ipa);
	};

	/**
	 * on product attribute changed
	 * @param id_product_attribute
	 */
	self.onUpdatedProduct = function (id_product_attribute) {
		console.log(id_product_attribute);
		// hide all gifts which have been disabled by association to the parent product attributes
		$gifts = self.$wrapper.find(".fpg_product");

		$gifts.each(function (i, gift) {
			var id_gift = $(gift).attr('id');

			if (fpg_attribute_associations[id_gift] == null) {
				return false;
			}

			if (Object.keys(fpg_attribute_associations[id_gift]).length == 0) {
				return false;
			}

			if (fpg_attribute_associations[id_gift][id_product_attribute] != null) {
				$(gift).show();
				if (!$(self.wrapper).is(':visible')) {
					$(self.wrapper).show();
				}

			} else {
				$(gift).hide();
			}
		});

		if ($('.fpg_product:visible').size() == 0) {
			$(self.wrapper).hide();
		}
	};

	/**
	 * Set attribute image
	 * @param $fpg_product
	 * @param url_image
	 */
	self.setAttributeImage = function ($fpg_product, url_image) {
		$fpg_product.find("img.fpg_thumb").attr("src", url_image);
	};

    self.init = function() {
		/* select first free gift as default */
		self.onUpdatedProduct(self.getSelectedProductIPA());
		self.$wrapper.find(".fpg_product").first().addClass('selected');

    };

    self.init();

    /* Events */

	$(document).on('change', '.attribute_select', function (e) {
		self.onUpdatedProduct(self.getSelectedProductIPA());
	});

	$(document).on('click', '.attribute_radio', function (e) {
		self.onUpdatedProduct(self.getSelectedProductIPA());
	});

	$(document).on('click', '#color_to_pick_list .color_pick', function (e) {
		self.onUpdatedProduct(self.getSelectedProductIPA());
	});


	self.$wrapper.find("select[name='fpg_ipa']").change(function () {
		var attribute_image = $(this).find('option:selected', this).attr('data-url_image');
		var $fpg_product = $(this).parents(".fpg_product");
		self.setAttributeImage($fpg_product, attribute_image);
		return false;
	});


	self.$wrapper.find(".fpg_select").click(function() {
		var selected_count = self.$wrapper.find(".selected").length;

		if (selected_count >= fpg_product_options.total_qty_per_product) {
			var extra_selected = (selected_count - fpg_product_options.total_qty_per_product) + 1;
			self.$wrapper.find(".selected").slice(0, extra_selected).removeClass("selected");
		}

        $fpg_product = $(this).parents(".fpg_product");
        $fpg_product.toggleClass("selected");
        self.onSelectedGiftChange();
        return false;
    });

	if (typeof(window.parent.ajaxCart) == 'undefined' || content_only == 1) {
		$("form#buy_block #add_to_cart button").click(function() {
			self.addFPGToCart();
		});
	} else {
		/*
		 * extend the original function in product.js - to add the free product after normal product has been added
		 */
		self.update_mode = 'ajax';
		window.parent.ajaxCart.updateCartInformation = (function (original_function) {
			function extendsUpdateCartInformation(jsonData, addedFromProductPage) {
				original_function(jsonData, addedFromProductPage);
				if (!jsonData.hasError || jsonData.hasError == false) {
					if (!self.added) self.addFPGToCart();
					self.added = true;
				}
			}
			return extendsUpdateCartInformation;
		})(window.parent.ajaxCart.updateCartInformation);
	}
};