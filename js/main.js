//引入其他的外部js文件   并对引入的文件进行重命名操作
requirejs.config( {
	paths : {
		jquery : "jquery-1.11.1.min",
		pub : "public",
		index : "index"
	}
} )
//[]要依赖的其他模块名称
requirejs( [ "jquery", "pub", "index" ],function( $, obj, ind ){
	/*头部国家和币种选择*/
	$( "#headWrap" ).load("../html/header.html");
//	alert( $( "body" ).html() );
//	ind.win();
//	$("#top").click = ind.win
} )

