/** random number **/
function randNum(max){x= Math.random().toString();x=x.substring(19 - max, 19);return x;};

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

/** collect http params **/
var Params = (function(a) {
	if (a == "") return {};
	var b = {};
	b['price']=a[0];
	a.shift();//remove first element from array
	al=a.length;
	b['id']=a[al-1];
	b['img']=a[al-2];
	a.length=(al - 2); //remove 2 element from last array
	b['title']=a.join(' '); 
	return b; 
})(window.location.search.substr(3).split("+"));


/** canonical **/
/***
(function(){
const 	canonical=document.createElement('link');
	canonical.setAttribute('rel', 'canonical');
	canonical.setAttribute('href', window.location.href.replace("&m=1","").replace("?m=1","")); 
	( document.head || document.getElementsByTagName('head')[0] ).appendChild(canonical);
})();
***/


function callback_archive(data) {
    	if ( data ) {
    		var inhtml='',counter=0,productImage='',productId='',productTitle='',permalink='',productPrice='';
        
    		for ( var i = 0; i < data.length; i++ ) {
    			  counter++;
    			  productImage	=	data[i].imageUrl;
    			  productId	=	data[i].productId;
    			  productTitle	=	data[i].productTitle;
    			  productPrice	=	data[i].salePrice;
    			  permalink	=	data[i].blogger_permalink;
                
    			  inhtml += loop_tpl_view
				  .replace("{permalink}",permalink)
				  .replace("{price}",productPrice)
				  .replace("{title}",productTitle)
				  .replace("{image}",productImage)
				  .replace("{productId}",productId)
				  .replace("{counter}",counter);
         	};
    
    		document.getElementById(loop_tpl_id).innerHTML = inhtml;
    
    	} else {
    
    		document.getElementById(loop_tpl_id).innerHTML = "No Result";
    
    	};
};


/** auto execute **/
(function(){
	var copyrightElem=document.getElementById("the_copyright");
	
  if ( copyrightElem ) {
	  
	/** start schema jsonld **/

	if ( ( schema_recipe == true && schema_products == true ) || ( schema_recipe == false && schema_products == false ) ) {
		schema_recipe 	= false;
		schema_products = true;
	}
  
	var Cat1Uri=window.location.origin+"/search/label/"+Math.floor((Math.random() * 403974) + 1);
	var Cat2Uri=window.location.origin+"/search/label/"+Math.floor((Math.random() * 403974) + 1);
	
	if ( schema_recipe == true ) {

		var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": Cat1Uri, "name": Breadcrumb1 } }, { "@type": "ListItem", "position": 2, "item": { "@id": Cat2Uri, "name": Breadcrumb2 } } ] }, { "@context": "https://schema.org", "@type": "Recipe", "author": window.location.hostname, "name": document.title, "datePublished": new Date().toISOString().slice(0, 10), "description": document.title, "image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'], "interactionStatistic": { "@type": "InteractionCounter", "interactionType": "https://schema.org/Comment", "userInteractionCount": randNum(4) }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": randNum(5) } } ];

	} else if ( schema_products == true ) {

		var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": Cat1Uri, "name": Breadcrumb1 } }, { "@type": "ListItem", "position": 2, "item": { "@id": Cat2Uri, "name": Breadcrumb2 } } ] }, { "@context": "https://schema.org", "@type": "Product", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4", "reviewCount": randNum(6) }, "description": document.title, "name": document.title, "image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'] } ];

	} else {

	    var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": Cat1Uri, "name": Breadcrumb1 } }, { "@type": "ListItem", "position": 2, "item": { "@id": Cat2Uri, "name": Breadcrumb2 } } ] } ];

	};
  

  const schema_script = document.createElement('script');
	schema_script.type = "application/ld+json";
	schema_script.textContent = JSON.stringify(schema);
  	( document.head || document.getElementsByTagName('head')[0] ).appendChild(schema_script);
  
	/** end schema jsonld **/
	
	
	
	/** start custom content **/
	
	if ( enable_custom_content === true && tpl_custom_content_html.length > 0 && tpl_custom_content_id != "" && ( var custom_content_elem = document.getElementById(tpl_custom_content_id) ) != null ) {
		shuffle(tpl_custom_content_html);
		tpl_custom_content_html = tpl_custom_content_html.join('')
									.replace(/{title}/g, document.title )
									.replace(/{domain}/g, window.location.origin )
									.replace(/{image}/g, "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'] );
		custom_content_elem.innerHTML = tpl_custom_content_html;
	}
	
	/** end custom content **/
	
	/** call product api **/
	var e=document.createElement("script");
	e.type="text/javascript";
	e.src="https://jsonp-bot-cacheno.staticapis.cyou/AEX/22des2020-js-paging?page="+Math.floor((Math.random() * 403974) + 1);
	(document.body||document.getElementsByTagName('body')[0]).appendChild(e);
	
	  
  } else {
	alert("the_copyright id not exists");
  };
	
})();


