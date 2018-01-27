window.onload = function(){
	function loadHtml(){
		return new Promise( function( resolve, reject ){
			$( "#headWrap" ).load( "../html/header.html" );
			$( "#footWrap" ).load( "../html/footer.html" );
			resolve();
		} )
	}
	loadHtml().then( function(){
		$( "#headWrap" ).on( "mouseenter", ".top-l ol>li", function(){
			$( this ).find( "a" ).css( "color", "#ee4242" ).parent().siblings().find( "a" ).css( "color", "#333" );
		} )
		$( "#headWrap" ).on( "click", ".top-l ol>li", function(){
			var str = "";
			str = `${$(this).find( "a" ).html()}
					<i class="iconfont icon-sanjiao"></i>`;
			$( this ).parent().prev().html( str );
		} )
	} )
	
}
