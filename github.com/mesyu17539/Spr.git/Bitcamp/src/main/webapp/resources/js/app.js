var app=app || {};
var route=route||{};
app=(()=>{
	var init=x=>{
		onCreate(x);
		setContentView(x);
	};
	var onCreate=x=>{
		route.init(x);
	};
	var setContentView=()=>{
		alert(route.$());
		$('#wrapper').empty();
		app.algorithm.onCreate()
	};
	return{
		init : init
	};
})();//IPAI(이파이) 즉시 실행하는 함수

app.algorithm=(()=>{
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		$('#wrapper').html('<h1>Hello AJAX</h1>');
	};
	return {onCreate:onCreate}
})();
app.router=(()=>{
	var onCreate=()=>{
		$.getScript()
	};
})();
route=(()=>{
	var init=x=>{
		sessionStorage.setItem('x',x);
	};
	var onCreate=()=>{};
	var $=() =>
	{return sessionStorage.getItem('x');}
	var setContentView=()=>{};
	return {
		init:init,$:$
		
			};
})();
