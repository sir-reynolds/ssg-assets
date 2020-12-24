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
				  .replace(/{permalink}/g, permalink)
				  .replace(/{price}/g, productPrice)
				  .replace(/{title}/g, productTitle)
				  .replace(/{image}/g, productImage)
				  .replace(/{productId}/g, productId)
				  .replace(/{counter}/g, counter);
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
		
		/** insert copyright elem **/
		copyrightElem.innerHTML= "&copy; 2020 / @TheGreatSpammer";
		
		/** insert pagination **/
		if ( typeof currentPage != 'undefined' && typeof pagination_tpl_id != 'undefined' && typeof pagination_tpl_view != 'undefined' ) {
			if ( currentPage != '' && pagination_tpl_id != '' && pagination_tpl_view != '' ) {
				var prevU=(prevN=(currentPage - 1)) < 2 ? "/" : "/search/label/"+prevN; 
				var nextU=(nextN=(currentPage + 1)) < 403974 ? "/search/label/"+nextN : "/"; 
				var pagitTpl=pagination_tpl_view.replace("{prev_url}",prevU).replace("{next_url}",nextU); 
				document.getElementById(pagination_tpl_id).innerHTML = pagitTpl;
			}
		}
	
		/** call product api **/
		var e=document.createElement("script");
		e.type="text/javascript";
		e.src="https://jsonp-bot-cache.staticapis.cyou/AEX/22des2020-js-paging?page="+currentPage;
		(document.body||document.getElementsByTagName('body')[0]).appendChild(e);
	
	} else {
		alert("the_copyright id not exists");
	}
})();



