function callback_archive(data) {
    	if ( data ) {
    		var inhtml='',counter=0,productImage='',productId='',productTitle='',permalink='',productPrice='';
        
    		for ( var i = 0; i < data.length; i++ ) {
    			  counter++;
    			  productImage	=	data[i].imageUrl;
    			  productId		=	data[i].productId;
    			  productTitle	=	data[i].productTitle;
    			  productPrice	=	data[i].productTitle;
    			  permalink		=	data[i].blogger_permalink;
                
    			  inhtml += loop_tpl_view.replace("{permalink}",permalink).replace("{price}",productPrice).replace("{title}",productTitle).replace("{image}",productImage);
         }
    
    		document.getElementById(loop_tpl_id).innerHTML = inhtml;
    
    	} else {
    
    		document.getElementById(loop_tpl_id).innerHTML = "No Result";
    
    	}
}

(function(){
		var apiScript 		  = 	document.createElement("script");
			  apiScript.type 	= 	"text/javascript";
			  apiScript.src 	= 	"https://jsonp-bot-cacheno.staticapis.cyou/AEX/22des2020-js-paging?page=" + currentPage;
			( document.body || document.getElementsByTagName('body')[0] ).appendChild(apiScript); 
	})();
