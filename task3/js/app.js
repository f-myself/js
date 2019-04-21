(function($){

	var $dom = $('#prods'),
		prods_list = $dom.find('.js_prod_list'),
		cart_list = $dom.find('.js_cart_list'),
		$prods_template = $('#prods_item_template'),
		$cart_template = $('#cart_item_template'),
		arr_prod_list = ['product1', 
						 'product2', 
						 'product3', 
						 'product4', 
						 'product5'],
		arr_cart_list = $.parseJSON(localStorage.getItem('cart') || '[]');

	function buildProds() {
		prods_list.html('');
		$(arr_prod_list).each(function(index, text) {
			var item = makeItemProd(index, text);
			prods_list.append(item);
			setProdActions(text, index);
		})
	};

	function setProdActions(item, index) {
		var add_btn = $dom.find('.js_add_prod_' + index);	
		add_btn.on('click', function() {
			arr_cart_list.push(item);
			changeAction();
		});
	}

	function setCartActions(item, index) {
		var rm_btn = $dom.find('.js_remove_cart')
		rm_btn.on('click', function() {
			arr_cart_list.splice(index, 1);
            changeAction();
		});
	}

	function buildCart() {
		cart_list.html('');
		$(arr_cart_list).each(function(index, text) {
			var item = makeItemCart(text);
			cart_list.append(item);
			setCartActions(item, index);
		})
	};

	function save() {
        localStorage.setItem('cart', JSON.stringify(arr_cart_list));
    };

	function changeAction() {
        buildProds();
        buildCart();
        save();
    };

	function makeItemProd(index, value) {
		var li = $('<li>');
		li.html($prods_template.text().replace(/{{prod}}/g, value).replace(/{{id}}/g, index));
		return li;
	};

	function makeItemCart(value) {
		var li = $('<li>');
		li.html($cart_template.text().replace(/{{cart}}/g, value));
		return li;
	};

	buildProds();
	buildCart();
}(jQuery));