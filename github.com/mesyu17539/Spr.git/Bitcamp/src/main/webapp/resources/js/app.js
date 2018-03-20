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
		algorithm=$.javascript()+'/algorithm.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.append(navigtion());
//			람다 ALL : 이해하기 어렵다
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
					$contexts.html(createDiv('container',sequenceContext()));
				});
				$(createATag('수학'))
				.appendTo('#li-math')
				.click(()=>{
					alert('수학');
					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('배열'))
				.appendTo('#li-matrix')
				.click(()=>{
					alert('배열');
					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('정렬'))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
					$contexts.html(createDiv('container',sequenceContext()))
				});
				$(createATag('응용'))
				.appendTo('#li-application')
				.click(()=>{
					alert('응용');
					$contexts.html(createDiv('container',sequenceContext()))
				});
		});
		
	};
	return {onCreate:onCreate}
})();