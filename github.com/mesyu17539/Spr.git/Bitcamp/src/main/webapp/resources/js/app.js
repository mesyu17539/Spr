var app=app || {};
//app=(()=>{
//	var init=x=>{
//		onCreate(x);
//		setContentView();
//	};
//	var onCreate=x=>{
//		app.router.onCreate(x);
//	};
//	var setContentView=()=>{
//		$('#wrapper').empty();
//		app.algorithm.onCreate()
//	};
//	return{
//		init : init
//	};
//})();//IPAI(이파이) 즉시 실행하는 함수
//ajax
app =(()=>{
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	};
	return {init:init}
})();
app.algorithm=(()=>{
	var $wrapper,context,algorithm,view;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		$contexts =$('#contexts');
		context = $.context();
		algo=$.javascript()+'/algo.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
			$wrapper.append(navigtion());
				$(createButtonNav1st())
				.appendTo('#div-nav-list-box')
				.click(()=>{
					alert('button 클릭');
				});
//				오버라이딩
				$(createATag(createSpan('glyphicon-user','로그인')))
				.appendTo('#li-login')
				.click(()=>{
					alert('Login btn Click');
				});
				$(createATag('수열'))
				.appendTo('#li-sequence')
				.click(()=>{
//					오버로딩
					alert('알고리즘');
						$contexts
							.html($(createDiv('content','container')));
							$('#content')
							.css({'margin-top':'50px',
								'width':'80%'
							})
							.append(sequenceContext());
							
							$('#td-algo-arith').html($(createATag('1-2+3-4+..-100'))
									.attr('style','margin-top:50px')
									.on('click',()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
									$('#result')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										$.getScript(algo,()=>{
											$('#resultText').text(arith(x,y,z));
									});
								});
							}));
							$('#td-algo-gao').html($(createATag('(-1)*2*(-3)*4*(-5)')).click(()=>{
								$('#td-algo-arith-ans').html(createInsertTab());
									$('#result')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										$.getScript(algo,()=>{
											$('#resultText').text('알고');
										});
									});
							}));
							$('#td-algo-switch').html('1+2+4+7+11...');
							$('#td-algo-gi').html('1+1+2+3+5+8+13+...');
//							$('#td-algo-gi').text('1+1+2+3+5+8+13+...');
							
				});
				$('수학')
				.appendTo('#li-math')
				.click(()=>{
					alert('수학');
//					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('배열'))
				.appendTo('#li-matrix')
				.click(()=>{
					alert('배열');
//					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('정렬'))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
//					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('응용'))
				.appendTo('#li-application')
				.click(()=>{
					alert('응용');
//					$contexts.html(createDiv('container',sequenceContext()))
				});
		});
		
	};
	return {onCreate:onCreate}
})();