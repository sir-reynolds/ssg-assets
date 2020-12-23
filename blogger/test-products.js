
/** schema jsonld **/
(function(){
  
  if ( ( schema_recipe == true && schema_products == true ) || ( schema_recipe == false && schema_products == false ) ) {
      	schema_recipe 	= 	false;
		    schema_products = 	true;
  }
  
  if ( schema_recipe == true ) {
  	
  	var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": _SCHCAT1_url, "name": _SCHCAT1_name } }, { "@type": "ListItem", "position": 2, "item": { "@id": _SCHCAT2_url, "name": _SCHCAT2_name } } ] }, { "@context": "https://schema.org", "@type": "Recipe", "author": window.location.hostname, "name": Params['title'], "datePublished": new Date().toISOString().slice(0, 10), "description": Params['title'], "image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'], "interactionStatistic": { "@type": "InteractionCounter", "interactionType": "https://schema.org/Comment", "userInteractionCount": randNum(4) }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": randNum(5) } } ];
  
  } else if ( schema_products == true ) {
  	
  	var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": _SCHCAT1_url, "name": _SCHCAT1_name } }, { "@type": "ListItem", "position": 2, "item": { "@id": _SCHCAT2_url, "name": _SCHCAT2_name } } ] }, { "@context": "https://schema.org", "@type": "Product", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4", "reviewCount": randNum(6) }, "description": Params['title'], "name": Params['title'], "image": "https://i2.wp.com/ae01.alicdn.com/kf/"+Params['img'] } ];
  
  } else {
    
    var schema = [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@id": _SCHCAT1_url, "name": _SCHCAT1_name } }, { "@type": "ListItem", "position": 2, "item": { "@id": _SCHCAT2_url, "name": _SCHCAT2_name } } ] } ];
  
  };
  

  const schema_script = document.createElement('script');
		    schema_script.type = "application/ld+json";
		    schema_script.textContent = JSON.stringify(schema);
  		( document.head || document.getElementsByTagName('head')[0] ).appendChild(schema_script);
  
})();
