
var head_element 	= 	( document.head || document.getElementsByTagName('head')[0] );
var copyrightElem	=	document.getElementById( "the_copyright" );
var canonicalHref	=	window.location.href.replace( "&m=1&", "" ).replace( "&m=1", "" ).replace( "?m=1&", "" ).replace( "?m=1", "" );
						
						

/** random number **/
function randNum(max){x= Math.random().toString();x=x.substring(19 - max, 19);return x;};

/** random string **/
function randStr(max){str = window.location.hostname;str += Math.random().toString();str= window.btoa(str);strlen= str.length;str=str.substring(strlen - max, strlen);return str; }; 

/** array shufle **/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};


/** 
 *	Modify Or Create <Meta> 
 *
 *	@key 	string
 *	@val	string
 *
 *	return 
 */
function set_meta( key, val )
{
	var pointer = 	(document.head||document);
	
	if ( key.includes( ":" ) ) {
		var meta = pointer.querySelector('meta[property="'+key+'"]') ?? pointer.querySelector('meta[name="'+key+'"]');
		if ( !meta ) {
			meta = document.createElement( 'meta' );
			meta.setAttribute( 'property', key );
			(document.head||document.getElementsByTagName('head')[0]).appendChild(meta);
		}
			meta.setAttribute( 'content', val );
		return;
	}
	else {
		var meta 	= 	pointer.querySelector('meta[name="'+key+'"]');
		if ( !meta ) {
			meta = document.createElement('meta');
			meta.setAttribute( 'name', key );
			(document.head||document.getElementsByTagName('head')[0]).appendChild(meta);
		}
			meta.setAttribute( 'content', val );
		return;
	}
return;	
};


/** 
 *	Modify Or Create <Link>
 *
 *	@rel 	string
 *	@href	string
 *
 *	return 
 */
function addLinkrel( rel, href )
{
	var pushlink= (document.head||document).querySelector('link[rel="'+rel+'"]');
	if( !pushlink ) { 
		pushlink=document.createElement('link');
		pushlink.setAttribute( 'rel', 		rel );
		pushlink.setAttribute( 'href', 		href ); 
		head_element.appendChild(pushlink);
	}
		pushlink.setAttribute( 'href', 		href );
	return;
};

/** 
 *	insert rawHtml
 *
 *	@id 	css id selector
 *	@val	rawHtml
 *
 *	return 
 */
function insertHtml( id, val )
{
	document.getElementById(id).innerHTML = val;
	return;
}

/** 
 *	insert schema jsonId
 *
 *	return 
 */
function schema()
{
	if ( ( schema_recipe == true && schema_products == true ) || 
			( schema_recipe == false && schema_products == false ) ) {
		schema_recipe 	= false;
		schema_products = true;
	}
	
	var Cat1Uri=window.location.origin+"/??"+Math.floor((Math.random() * 403974) + 1);
	var Cat2Uri=window.location.origin+"/??"+Math.floor((Math.random() * 403974) + 1);
	
	if ( schema_recipe == true ) {

		var schema = [ 
				{ 
					"@context": "https://schema.org", 
					"@type": "BreadcrumbList", 
					"itemListElement": [ 
					{ 
						"@type": "ListItem", 
						"position": 1, 
						"item": 
						{ 
							"@id": Cat1Uri, 
							"name": Breadcrumb1 
						} 
					}, 
					{ 
						"@type": "ListItem", 
						"position": 2, 
						"item": 
						{ 
							"@id": Cat2Uri, 
							"name": Breadcrumb2 
						} 
					} 
					] 
				}, 
				{ 
					"@context": "https://schema.org", 
					"@type": "Recipe", 
					"author": window.location.hostname, 
					"name": document.title, 
					"datePublished": new Date().toISOString().slice(0, 10), 
					"description": document.title, 
					"image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'], 
					"interactionStatistic": 
					{ 
						"@type": "InteractionCounter", 
						"interactionType": "https://schema.org/Comment", 
						"userInteractionCount": randNum(4) 
					}, 
					"aggregateRating": 
					{ 
						"@type": "AggregateRating", 
						"ratingValue": "5", 
						"ratingCount": randNum(5) 
					} 
				} 
			];

	} else if ( schema_products == true ) {

		var schema = [ 
				{
					"@context": "https://schema.org", 
					"@type": "BreadcrumbList", 
					"itemListElement": [ 
					{ 
						"@type": "ListItem", 
						"position": 1, 
						"item": 
						{ 
							"@id": Cat1Uri, 
							"name": Breadcrumb1 
						} 
					}, 
					{ 
						"@type": "ListItem", 
						"position": 2, 
						"item": 
						{ 
							"@id": Cat2Uri, 
							"name": Breadcrumb2 
						} 
					} 
					] 
				}, 
				{ 
					"@context": "https://schema.org", 
					"@type": "Product", 
					"aggregateRating": 
					{ 
						"@type": "AggregateRating", 
						"ratingValue": "4", 
						"reviewCount": randNum(6) 
					}, 
					"sku": Params['id'],
					"description": document.title, 
					"name": document.title, 
					"image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'],
					"offers": 
					{
						"@type": "Offer",
						"url": canonicalHref,
						"availability": "https://schema.org/InStock",
						"itemCondition": "http://schema.org/NewCondition",
						"price": Params['price'].replace("US $", ""),
						"priceValidUntil": "2098-12-31",
						"priceCurrency": "USD"
					}, 
					"brand": 
					{
						"@type": "Brand",
						"name": window.location.hostname
					}
				} 
			];

	} else {

	    var schema = [ 
		    { 
			    "@context": "https://schema.org", 
			    "@type": "BreadcrumbList", 
			    "itemListElement": 
			    [ 
				    { 
					    "@type": "ListItem", 
					    "position": 1, 
					    "item":
					    { 
						    "@id": Cat1Uri, 
						    "name": Breadcrumb1 
					    } 
				    }, 
				    { 
					    "@type": "ListItem", 
					    "position": 2, 
					    "item": 
					    { 
						    "@id": Cat2Uri, 
						    "name": Breadcrumb2 
					    } 
				    } 
			    ] 
		    } 
	    ];

	};
  
	var schema_script = document.createElement('script');
	schema_script.type = "application/ld+json";
	schema_script.textContent = JSON.stringify(schema);
  	head_element.appendChild(schema_script);
	
	return;
}





/** Custom Header **/
function custom_header(){

/** add canonical **/
addLinkrel( 'canonical', canonicalHref );

/** add css **/
	for ( var i = 0; i < css_tpl.length; i++ ) {
addLinkrel( 'stylesheet', css_tpl[i] );
	}

	
/** title **/
if ( Params['type'] == "products" ) {
		CUSTOM_PRODUCTS_TITLE = CUSTOM_PRODUCTS_TITLE
								.replace(	/\[price\]/g, 	Params['price'] )
								.replace(	/\[title\]/g, 	Params['title'] )
								.replace(	/\[productId\]/g, Params['id'] )
								.replace(	/\[domain\]/g, 	window.location.hostname )
								.replace(	/\[random\]/g, 	randStr(7) );
		CUSTOM_PRODUCTS_DESC = CUSTOM_PRODUCTS_DESC
								.replace(	/\[price\]/g, 	Params['price'] )
								.replace(	/\[title\]/g, 	Params['title'] )
								.replace(	/\[productId\]/g, Params['id'] )
								.replace(	/\[domain\]/g, 	window.location.hostname )
								.replace(	/\[random\]/g, 	randStr(7) );
								
		document.title = 					CUSTOM_PRODUCTS_TITLE;
		set_meta( 'og:title', 				CUSTOM_PRODUCTS_TITLE );	
		set_meta( 'twitter:title', 			CUSTOM_PRODUCTS_TITLE );
		set_meta( 'description', 			CUSTOM_PRODUCTS_DESC );
		set_meta( 'og:description', 		CUSTOM_PRODUCTS_DESC );
		set_meta( 'twitter:description', 	CUSTOM_PRODUCTS_DESC );
		set_meta( 'robots', 				CUSTOM_PRODUCTS_METAROBOTS ); 
		insertHtml( 'the_page_title', 		CUSTOM_PRODUCTS_TITLE);
		
		schema();
} 
else if ( Params['type'] == "pages" ) {
		CUSTOM_PAGES_TITLE = CUSTOM_PAGES_TITLE
							.replace(	/\[pageNum\]/g, 	Params['currentPage'] )
							.replace(	/\[domain\]/g, 		window.location.hostname )
							.replace(	/\[random\]/g, 		randStr(8) );
		CUSTOM_PAGES_DESC = CUSTOM_PAGES_DESC
							.replace(	/\[pageNum\]/g, 	Params['currentPage'] )
							.replace(	/\[domain\]/g, 		window.location.hostname )
							.replace(	/\[random\]/g, 		randStr(8) );
					
		document.title = 					CUSTOM_PAGES_TITLE;
		set_meta( 'og:title', 				CUSTOM_PAGES_TITLE );	
		set_meta( 'twitter:title', 			CUSTOM_PAGES_TITLE );
		set_meta( 'description', 			CUSTOM_PAGES_DESC );
		set_meta( 'og:description', 		CUSTOM_PAGES_DESC );
		set_meta( 'twitter:description', 	CUSTOM_PAGES_DESC );
		set_meta( 'robots', 				CUSTOM_PAGES_METAROBOTS );
		insertHtml( 'the_page_title', 		CUSTOM_PAGES_TITLE);
}
else {
		CUSTOM_INDEX_TITLE = CUSTOM_INDEX_TITLE
							.replace(	/\[domain\]/g, 	window.location.hostname )
							.replace(	/\[random\]/g, 	randStr(9) );
		CUSTOM_INDEX_DESC = CUSTOM_INDEX_DESC
							.replace(	/\[domain\]/g, 	window.location.hostname )
							.replace(	/\[random\]/g, 	randStr(9) );
					
		document.title = 					CUSTOM_INDEX_TITLE;
		set_meta( 'og:title', 				CUSTOM_INDEX_TITLE );	
		set_meta( 'twitter:title', 			CUSTOM_INDEX_TITLE );
		set_meta( 'description', 			CUSTOM_INDEX_DESC );
		set_meta( 'og:description', 		CUSTOM_INDEX_DESC );
		set_meta( 'twitter:description', 	CUSTOM_INDEX_DESC );
		set_meta( 'robots', 				CUSTOM_INDEX_METAROBOTS );
		insertHtml( 'the_page_title', 		CUSTOM_INDEX_TITLE);
}

		/** global html in all page **/
		set_meta( 'viewport', "width=device-width, initial-scale=1" );
		set_meta( 'og:url', canonicalHref );
		insertHtml( 'site_name', '<a href="/">'+window.location.hostname+'</a>');
		
return;
};




/** 
 * insert html template after exec api
 *
 * @data array
 *
 * return
 */
function callback_archive(data) {
    	if ( data ) {
    		var inhtml='',counter=0,productImage='',productId='',productTitle='',permalink='',productPrice='', the_content='<p>';;
        
    		for ( var i = 0; i < data.length; i++ ) {
    			  counter++;
    			  productImage	=	data[i].imageUrl;
    			  productId		=	data[i].productId;
    			  productTitle	=	data[i].productTitle;
    			  productPrice	=	data[i].salePrice;
    			  permalink		=	data[i].permalink;
                
    			  inhtml += loop_tpl_view
				  .replace(	/\[permalink\]/g, 	permalink )
				  .replace(	/\[price\]/g, 		productPrice )
				  .replace(	/\[title\]/g, 		productTitle )
				  .replace(	/\[image\]/g, 		productImage )
				  .replace(	/\[productId\]/g, 	productId )
				  .replace(	/\[counter\]/g, 	counter );
				  
				  the_content += productTitle + ' ';
				  if ( i >= 1 && i % 10 === 0 ) {
						the_content += '</p><p>';
				  };
         	};
			
			the_content += '</p>';
    
    		//document.getElementById(loop_tpl_id).innerHTML = inhtml;
			if ( Params['type'] == "products" ) {
				insertHtml("the_content", the_content);
			};
			
			insertHtml(loop_tpl_id, inhtml);
			
    	} else {
    
    		//document.getElementById(loop_tpl_id).innerHTML = "No Result";
			insertHtml(loop_tpl_id, "No Result");
    	};

	return;
};










/** 
 * collect http params 
 *
 * @a array
 *
 * return array object
 */
var Params = (function(a) {
	
	if (a == "") {
		a 						=	{};
		a['type'] 				=	"index";
		a['currentPage']		=	1;
		
		return a;
	}
	
	var b = {};
		if ( a.length > 2 ) {
			b['type'] 			= 	'products';
			b['id']				=	a[0];
			b['img']			=	a[1];
			b['title']			=	a[2].replace(/-/g, " ");
			b['price']			=	"US $"+a[3];
			b['currentPage']	=	Math.floor((Math.random() * 403974) + 1);
		} else { 
			b['type'] 			= 	'pages';
			b['currentPage'] 	= 	parseInt( a[0] );
			
			if ( isNaN( b['currentPage'] ) ) {
				window.location.href= "/";
				return;
			}
		}
		
	return b;	
})(window.location.search.substr(2).split(",,,"));



/** offers **/
if ( Params['type'] == "products" && ['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'yahoo.'].some(e => document.referrer.toLowerCase().includes(e)) && Params['id'] && AFF_DOMAIN != "" && DEMO === false ) {
	if ( ['bot','google','bing','msn','yandex','pagespeed','lighthouse','http'].some(e => navigator.userAgent.toLowerCase().includes(e) ) === false ) {
		window.location.href = "https://"+AFF_DOMAIN+"/??"+Params['id']+",,,"+window.location.hostname;
	}
}



/** auto execute **/
(function(){
	
	
	if ( copyrightElem ) {
		
		//insert on header
		custom_header();
		
		// start custom content 
		if ( Params['type'] == "products" && enable_custom_content === true && tpl_custom_content_html.length > 0 && tpl_custom_content_id != "" && ( custom_content_elem = document.getElementById(tpl_custom_content_id) ) != null ) {
			shuffle(tpl_custom_content_html);
			tpl_custom_content_html = tpl_custom_content_html.join('')
							.replace(/\[title\]/g, document.title )
							.replace(/\[domain\]/g, window.location.hostname )
							.replace(/\[image\]/g, "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'] );
			custom_content_elem.innerHTML = tpl_custom_content_html;
		}
		
		// insert copyright elem
		copyrightElem.innerHTML= "&copy; 2020 / @TheGreatSpammer";
		
		// insert pagination
		if ( Params['type'] != "products" && typeof pagination_tpl_id != 'undefined' && typeof pagination_tpl_view != 'undefined' ) {
			if ( pagination_tpl_id != '' && pagination_tpl_view != '' ) {
				var prevU=(prevN=(Params['currentPage'] - 1)) < 2 ? "/" : "/??"+prevN; 
				var nextU=(nextN=(Params['currentPage'] + 1)) < 403974 ? "/??"+nextN : "/";
				var pagitTpl=pagination_tpl_view.replace("[prev_url]",prevU).replace("[next_url]",nextU); 
				document.getElementById(pagination_tpl_id).innerHTML = pagitTpl;
			}
		}
	
		// call product api
		var e=document.createElement("script");
		e.type="text/javascript";
		e.src="https://jsonp-bot-cache.staticapis.cyou/AEX/22des2020-js-paging?page="+Params['currentPage'];
		(document.body||document.getElementsByTagName('body')[0]).appendChild(e);
	
	} else {
		alert("the_copyright id not exists");
	}
})();


