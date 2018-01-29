window.onload = function(){
	
	function loadHtml(){
		return new Promise( function( resolve, reject ){
			$( "#headWrap" ).load( "../html/header.html" );
			$( "#footWrap" ).load( "../html/footer.html" );
			resolve();
		} )
	}
	loadHtml().then( function(){
		
		/*国家和币种选择开始*/
		$( "#headWrap" ).on( "mouseenter", ".top-l ol>li", function(){
			$( this ).find( "a" ).css( "color", "#ee4242" ).parent().siblings().find( "a" ).css( "color", "#333" );
		} )
		$( "#headWrap" ).on( "click", ".top-l ol>li", function(){
			var str = "";
			str = `${$(this).find( "a" ).html()}
					<i class="iconfont icon-sanjiao"></i>`;
			$( this ).parent().prev().html( str );
		} )
		/*国家和币种选择结束*/
		
		/*banner轮播图开始*/
		var index = 0;//控制数字下标
		var timer = setInterval( autoPlay, 3000 );
		function autoPlay(){
			index++;
			if( index == $( "#picUl>.pic" ).length ){
				index = 0;
			}
			$( "#picUl>.pic" ).eq( index ).css( "background", "url(../images/banner"+index+".jpg)" + "center" );
			$( "#picUl>.pic" ).eq( index ).fadeIn( 2000 ).siblings().fadeOut( 2000 );
			$( "#banner-nav-list>li" ).eq( index ).addClass( "active" ).siblings().removeClass( "active" );
		}
		/*鼠标移入banner 停止定时器 让数字和左右箭头显示*/
		$( "#banner" ).mouseenter( function(){
			clearInterval( timer );
			$( "#banner-nav-list" ).fadeIn( 900 );
			$( "#arr>div" ).fadeIn( 900 );
		} )
		$( "#banner" ).mouseleave( function(){
			timer = setInterval( autoPlay, 3000 );
			$( "#banner-nav-list" ).fadeOut( 900 );
			$( "#arr>div" ).fadeOut( 900 );
		} )
		/*鼠标操作数字*/
		$( "#banner-nav-list>li" ).mouseenter( function(){
			index = $( this ).index();
			$( "#picUl>.pic" ).eq( index ).css( "background", "url(../images/banner"+index+".jpg)" + "center" );
			$( "#picUl>.pic" ).eq( index ).fadeIn( 2000 ).siblings().fadeOut( 2000 );
			$( "#banner-nav-list>li" ).eq( index ).addClass( "active" ).siblings().removeClass( "active" );
		} )
		/*点击左右箭头*/
		$( "#toLeft" ).click( function(){
			index--;
			if( index == -1 ){
				index = $( "#picUl>.pic" ).length - 1;
			}
			$( "#picUl>.pic" ).eq( index ).css( "background", "url(../images/banner"+index+".jpg)" + "center" );
			$( "#picUl>.pic" ).eq( index ).fadeIn( 2000 ).siblings().fadeOut( 2000 );
			$( "#banner-nav-list>li" ).eq( index ).addClass( "active" ).siblings().removeClass( "active" );
		} )
		$( "#toRight" ).click( function(){
			index++;
			if( index == $( "#picUl>.pic" ).length ){
				index = 0;
			}
			$( "#picUl>.pic" ).eq( index ).css( "background", "url(../images/banner"+index+".jpg)" + "center" );
			$( "#picUl>.pic" ).eq( index ).fadeIn( 2000 ).siblings().fadeOut( 2000 );
			$( "#banner-nav-list>li" ).eq( index ).addClass( "active" ).siblings().removeClass( "active" );
		} )
		/*banner轮播图结束*/
		
		
		
		
		
		/*新品上架轮播图开始*/
		newLunbo();
		function newLunbo(){
			var index = 0;
			var newTimer = setInterval( newAuto, 3600 );
			function newAuto(){
				index++;
				if( index == 4 ){
					index = 1;
					$( ".newLunbo" ).css( "left", 0 );
				}
				startMove( $( ".newLunbo" )[ 0 ], { "left" : -index*1200} );
			}
			/*鼠标移入移出 控制箭头显示隐藏 和 定时器*/
			$( ".newLunbo" ).parent().hover( function(){
				clearInterval( newTimer );
				$( this ).find( "span" ).fadeIn();
			}, function(){
				newTimer = setInterval( newAuto, 2600 );
				$( this ).find( "span" ).fadeOut();
			} )
			
			/*点击左箭头*/
			$( ".proWrap span.prev" ).click( function(){
				index--;
				if( index == -1 ){
					index = 0
				}
				startMove( $( ".newLunbo" )[ 0 ], { "left" : -index*1200} );
			} )
			/*点击右箭头*/
			$( ".proWrap span.next" ).click( function(){
				if( index == 5 ){
					index = 0;
					$( ".newLunbo" ).css( "left", 0 );
				}
				index++;
				if( index == 5 ){
					index = 4;
				}
				startMove( $( ".newLunbo" )[ 0 ], { "left" : -index*1200} );
			} )
			
		}
		
		/*新品上架轮播图结束*/
		
		
		
		
		
		
		
		
		
		
		
		/*ajax获取json数据*/
		ajaxGet( "../json/newData.json", showPro );
		function showPro( res ){
			/*main新品上架开始*/
			var str = "";
			var arr = JSON.parse( res );
			for( var i = 0; i < 15; i++ ){
				var randNew = getRand(0,29);
				str += `<li class="fl">
							<a href="proDetail.html?id=${arr[randNew].id}">
								<p>
									<i class="iconfont icon-icon--"></i>
									<i class="iconfont icon-xiaohuoche"></i>
								</p>
								<div class="img-box">
									<img src="../images/${arr[randNew].src}"/>
								</div>
								<div class="detail">
									<h3>${arr[randNew].info}</h3>
									<p class="price">¥${arr[randNew].price}</p>
									<p>${arr[randNew].country}
										<img src="../images/${arr[randNew].icon}"/>
									</p>
								</div>
							</a>
						</li>`;
			}
			$( ".proList>ul" ).html( str );
			
			/*main热卖推荐开始*/
			var hotStr = "";
			for( var j = 0; j < 12; j++ ){
				var randHot = getRand(0,29);
				hotStr += `<li class="fl">
								<a href="proDetail.html?id=${arr[randHot].id}">
									<p class="fl">
										<i class="iconfont icon-icon-test"></i>
										<i class="iconfont icon-xiaohuoche"></i>
									</p>
									<div class="img-box">
										<img src="../images/${arr[randHot].src}"/>
									</div>
									<div class="fl detail">
										<h3>${arr[randHot].info}</h3>
										<p class="price">¥${arr[randHot].price}</p>
										<p>${arr[randHot].country}
											<img src="../images/${arr[randHot].icon}"/>
										</p>
									</div>
								</a>
							</li>`;
			}
			$( ".proContent>ul" ).html( hotStr );
			/*main热卖推荐结束*/
		}
		
		/*鼠标移入让商品信息上移*/
		$( ".proList" ).on( "mouseenter", "li", function(){
			$( this ).find( ".detail" ).stop().animate( { "top" : -22 } );
		} ).on( "mouseleave", "li", function(){
			$( this ).find( ".detail" ).stop().animate( { "top" : 0 } );
		} )
		/*main新品上架结束*/
		
		/*全球购开始*/
		$( ".product .global" ).on( "mouseenter", "a", function(){
			$( this ).stop().animate( { "top" : -22 }, 190 );
		} ).on( "mouseleave", "a", function(){
			$( this ).stop().animate( { "top" : 0 }, 190 );
		} )
		/*全球购结束*/
		
		
		/*首页楼梯中的小轮播*/
		function loutiPlay( selecter ){
			var index = 0;//
			var sTimer = setInterval( auto, 2400 );
			function auto(){
				index++;
				if( index == $( selecter ).children().length ){
					$( selecter ).css( "left", 0 );
					index = 1;
				}
				startMove( $( selecter )[0], { "left" : -index*720 } );
				$( selecter ).next().children().eq( index==5 ? 0 : index ).addClass( "activeLi" ).siblings().removeClass( "activeLi" );
			}
			
			/*鼠标移入移出 控制箭头和numberList隐藏和显示 控制定时器*/
			$( selecter ).parent().hover( function(){
				clearInterval( sTimer );
				$( selecter ).next().next().find( "div" ).fadeIn();
			}, function(){
				sTimer = setInterval( auto, 2400 );
				$( selecter ).next().next().find( "div" ).fadeOut();
			} )
			
			/*操作numberList*/
			$( selecter ).next().children().mouseenter( function(){
				index = $( this ).index() - 1;
				auto();
			} )
			
			/*操作左右箭头*/
			$( selecter ).next().next().find( "div" ).eq( 0 ).click( function(){
				index--;
				if( index == -1 ){
					index = 0;
				}
				startMove( $( selecter )[0], { "left" : -index*720 } );
				$( selecter ).next().children().eq( index==5 ? 0 : index ).addClass( "activeLi" ).siblings().removeClass( "activeLi" );
			} )
			$( selecter ).next().next().find( "div" ).eq( 1 ).click( function(){
				if( index == $( selecter ).children().length - 1 ){
					$( selecter ).css( "left", 0 );
					index = 0;
				}
				index++;
				if( index == $( selecter ).children().length - 1 ){
					index = $( selecter ).children().length - 2;
				}
				startMove( $( selecter )[0], { "left" : -index*720 } );
				$( selecter ).next().children().eq( index==5 ? 0 : index ).addClass( "activeLi" ).siblings().removeClass( "activeLi" );
			} )
		}
		loutiPlay( ".louti1" );
		loutiPlay( ".louti2" );
		loutiPlay( ".louti3" );
		loutiPlay( ".louti4" );
		loutiPlay( ".louti5" );
		loutiPlay( ".louti6" );
		loutiPlay( ".louti7" );
		loutiPlay( ".louti8" );
		loutiPlay( ".louti9" );
		loutiPlay( ".louti10" );
		
		/*首页楼梯中小轮播右边的ul轮播*/
		function toLR( sel ){
			var flag = true;
			$( sel )[ 0 ].timer = setInterval( function(){
				auto( sel );
			}, 2400 );
			function auto( sel ){
				if( flag ){
					$( sel ).animate( { "left" : -240 }, function(){
						flag = false;
					} );
				}else{
					$( sel ).animate( { "left" : 0 }, function(){
						flag = true;
					} );
				}
			}
			/*鼠标移入移出 控制定时器*/
			$( sel ).hover( function(){
				clearInterval( $( sel )[ 0 ].timer );
			}, function(){
				$( sel )[ 0 ].timer = setInterval( function(){
					auto( sel );
				}, 2400 );
			} )
		}
		toLR( ".toLR1" );
		toLR( ".toLR2" );
		toLR( ".toLR3" );
		toLR( ".toLR4" );
		toLR( ".toLR5" );
		toLR( ".toLR6" );
		toLR( ".toLR7" );
		toLR( ".toLR8" );
		toLR( ".toLR9" );
		toLR( ".toLR10" );
		
		
		/*楼梯*/
		function showLouti(){
			var flag = true;
			$( document ).scroll( function(){
				/*显示浮动的搜索栏*/
				if( $( "html,body" ).scrollTop() > $( ".newPro" ).offset().top ){
					$( ".searchFloat" ).fadeIn();
				}else{
					$( ".searchFloat" ).fadeOut();
				}
				if( !flag ){
					return;
				}
				/*滚动鼠标  第一楼出现时  侧边楼梯显示*/
				if( $( "html,body" ).scrollTop()+$( window ).innerHeight() >= $( ".floor>.title" ).eq( 0 ).offset().top ){
					$( "#floatNav" ).fadeIn();
				}else{
					$( "#floatNav" ).fadeOut();
				}
			
				//该楼层的offset().top-页面scrollTop < 楼层高度/2 时
				var i = $( ".floor" ).filter( function(){
					return Math.abs($(this).offset().top-$("html,body").scrollTop())<$(this).height()/2;  
				} ).index();//返回3-12   ??????????
//				console.log( $( ".floor" ).eq( $( ".floor" ).length - 1 ).index() );//12
				if( i != -1 ){
					$( "#floatNav>p" ).eq( i-3 ).addClass( "cur" )
												.siblings()
												.removeClass( "cur" )
				}else{
					$( "#floatNav>p" ).removeClass( "cur" );
				}
			} )
				
			/*点击回到顶部*/
			$( "#toTop" ).click( function(){
				flag = false;
				$( "html,body" ).animate( { "scrollTop" : 0 }, function(){
					flag = true;
				} );
			} )
			
			/*点击每个侧边楼层小图标 可视区显示对应楼层*/
			$( "#floatNav>p" ).click( function(){
				flag = false;
				var index = $( this ).index();
				$( "html,body" ).animate( { "scrollTop" : $( ".floor" ).eq( index ).offset().top },function(){
					flag = true;
				} );
			} )
			
		}
		showLouti();
		
		/*点击closeBtn关闭浮动的app*/
		$( "#closeBtn" ).click( function(){
			$( "#appFloat" ).fadeOut();
		} )
		
	} )
}

