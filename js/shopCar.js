function loadHtml(){
	return new Promise( function( resolve, reject ){
		$( "#headWrap" ).load( "../html/header.html" );
		$( "#footWrap" ).load( "../html/footer.html" );
		resolve();
	} )
}
loadHtml().then( function(){
//	var proArr = getCookie( "proList" );
//	var proStr = "";
//	for( var i = 0; i < proArr.length; i++ ){
//		proStr += `<dd class="item clearfix">
//						<span class="col-1 fl">
//							<input type="checkbox" id="" class="fl" checked />
//						</span>
//						<span class="col-2 fl">
//							<img class="img" src="../images/pro_thumb01.jpg"/>
//						</span>
//						<span class="col-2 fl saleInCn">
//							<a href="javascript:;">
//								进口美国加州混酿红葡萄酒2支  750ml*2瓶 全国包邮
//							</a>
//							<p>此商品在中国有售</p>
//						</span>
//						<span class="col-2 fl mt-28">
//							<b class="price">¥1,597.33</b>
//						</span>
//						<span class="col-2 fl mt-28">
//							<p class="jiaJian">
//								<a class="fl" href="javascript:;">
//									<i>-</i>
//								</a>
//								<input type="text" id="" class="fl" value="1" />
//								<a class="fl" href="javascript:;">
//									<i>+</i>
//								</a>
//							</p>
//						</span>
//						<span class="col-2 fl mt-28">
//							<b class="cRed price">¥1,597.33</b>
//						</span>
//						<span class="col-1 fl mt-28">
//							<a href="javascript:;">
//								<img src="../images/del.png"/>
//							</a>
//						</span>
//					</dd>`;
//	}
//	console.log( $( "#proList" ) );
//	$( "#proList" ).html( proStr );
} )
	
	
	
	
