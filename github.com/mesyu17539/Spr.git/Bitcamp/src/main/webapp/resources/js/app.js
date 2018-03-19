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
		context = $.context();
		algorithm=$.javascript()+'/algorithm.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.append(navigtion());
				$(createButtonNav1st()).appendTo('#div-nav-list-box')
				.click(()=>{
					alert('button 클릭');
				});
				var aLogin='<a id="a-login" href="#"> '
				+'            <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;LOGIN</span>'
				+'           </a>'
				$('#li-login').append(aLogin);
				$('#a-login').click(()=>{
					alert('Login btn Click');
				});
		});
		
	};
	return {onCreate:onCreate}
})();