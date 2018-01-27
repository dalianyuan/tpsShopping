window.onload = function(){
	
	function loadHtml(){
		return new Promise( function( resolve, reject ){
			$( "#headWrap" ).load( "../html/header.html" );
			$( "#footWrap" ).load( "../html/footer.html" );
			resolve();
		} )
	}
	loadHtml().then( function(){
		
		
		
	} )
	
	
	
	
}
