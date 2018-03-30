var app=app || {};
//즉시실행 : 객체 리터럴
app = {init:x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
//					함수 이용하기▽
			$.extend(new Router(x));
			app.nav.onCreate();
			app.algorithm.onCreate();
			app.member.onCreate();
		})
	}
};
app.home={
		move:x=>{
			app.member.onCreate();
		}
};
app.nav=(()=>{
	var $wrapper,context,algorithm,view,iamge;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		context = $.context();
		image=$.image();
		algo=$.javascript()+'/algo.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
			$wrapper.html(navigtion());
			
			$(createDiv({id:'container',clazz:'container text-center'}))
			.attr('style', 'background-color: white; padding: 50px')
			.appendTo($wrapper);
			$('#container')
			.html($(createDiv({id:'content',clazz:'content text-center'})));
			
			$(createButtonNav1st())
			.appendTo('#div-nav-list-box')
			.click(()=>{
				alert('button 클릭');
			});
			$('#li-home')
			.click(()=>{
				alert('home 클릭');
				app.home.move();
			});
//				오버라이딩
			$(createATag({link:'#',id:'a-login',link:'#',val:createSpan({clazz:'glyphicon-user',val:'로그인'})}))
			.appendTo('#li-login')
			.click(()=>{
				alert('Login btn Click');
				app.member.onCreate();
			});
			
			$(createATag({
				id:'a-board',
				link:'#',
				val:createSpan({
					id:'span-board',
					clazz:'glyphicon-blackboard',
					val:'보드'}),
				link:'#'}))
			.appendTo('#li-board');
			$('#span-board')
			.click(()=>{
				alert('보드 btn Click');
				$('#span-board').remove();
				$('#a-board')
				.html($(createSpan({
					clazz:'glyphicon-blackboard',
					val:'글쓰기'}))
					.on('click',e=>{
						e.preventDefault();
						app.board.write();
					})
				);
				app.board.onCreate();
			});
		});
	}
	return {onCreate:onCreate}
})();
app.board=(x=>{
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		context = $.context();
		image=$.image();
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		articles(1);
	}
	var write =()=>{
		alert('끌쓴이');
		$.magnificPopup.open(
                {items: {src: boardWriting({clazz:'board-writing'})}, type : 'inline'}, 0);
		
//		$.getJSON(context+'/write',d=>{
//			
//		});
	}
	var articles =x=>{
		$.getJSON(context+'/articles/'+x,d=>{
			$.getScript(context+'/resources/js/view.js',()=>{
				$('#content').empty();
				$(createTab({
                    id: 'articles', 
                    clazz:''
                }))
                .attr('style', 'width:100%')
                .appendTo('#content');
                
                $(createTh({
                    list: ['글번호', '제목', '작성자', '작성일', '수정/삭제'],
                    thClazz:'',
                }))
                .attr('style', 'background-color: #333; color: white; height: 40px')
                .appendTo('#articles');
                
                $(createTr({
                    trList: d.list,
                    trClazz: '',
                    tdList: '',
                    tdClazz: 'flag-'
                }))
                .attr('style', 'text-align: center; border-bottom: 1px solid gray; height: 40px')
                .appendTo('#articles');
                for(var i=0;i<d.page.pageSize;i++){
                	$('#tr_'+i).append($(createFlag({id:''}))
                			.append($('<button>수정</button>')
                                	.attr('onClick','alert("'+$('#td_'+i+'_1').text()+'")'))
                			.append($('<button>삭제</button>')
                			.attr('onClick','alert("'+$('#td_'+i+'_1').text()+'")')));
                }

//                $(createDiv({id:'nav-page',clazz:'content'}))
//                .appendTo('#content');
//                $(createNav({id:'nav-page',clazz:''}))
//                .appendTo('#content');
                $(createUL({id:'ul-page',clazz:'pagination'}))
                .appendTo('#content');
                if(d.page.startPage!=1){
                	$(createLI({id:'li-prev',clazz:''}))
                	
                	.appendTo('#ul-page');
                	$(createATag({link:'#',id:'a-prev',val:' '}))
                	.attr('onClick','app.board.articles('+((d.page.startPage)-1)+'); return false;')
                	.attr('aria-label','Previous')
                	.appendTo('#li-prev');
                	$(createSpan({clazz:'',val:'&laquo;'}))
                	.appendTo('#a-prev');
                }
                for(var i=d.page.startPage;i<=d.page.endPage;i++){
                	$(createLI({id:'li'+i,clazz:''}))
                	.appendTo('#ul-page');
                	$(createATag({link:'#',id:'page'+i,val:''}))
                	.appendTo('#li'+i);
                	if(i==d.page.pageNum){
                		$(createFont({val:i}))
                		.attr('style','color:red')
                		.appendTo('#page'+i);
//                		.appendTo($(this));
                	}else{
                		$(createFont({val:i}))
                		.appendTo($('#page'+i)
                				.attr('onClick','app.board.articles('+i+'); return false;')
                				);
//                		.appendTo($(this));
                	}
                }
                if(d.page.endPage!=d.page.totalPageCount){
                	$(createLI({id:'li-next',clazz:''}))
                	.appendTo('#ul-page');
                	$(createATag({link:'#',id:'a-next',val:' '}))
                	.attr('onClick','app.board.articles('+((d.page.endPage)+1)+'); return false;')
                	.attr('aria-label','Next')
                	.appendTo('#li-next');
                	$(createSpan({clazz:'',val:'&raquo;'}))
                	.appendTo('#a-next');
                }
			});
		});
	}
	return {articles:articles,onCreate:onCreate,write:write}
})();
app.board2={
		articles : x=>{
			//JSON으로 받음. {:}
			alert('전달 받은 값'+x.context);
//			객체(데이터)를 주고 받기에 느리고 오류나면 전송,수신자 모두 봐야한다
//			$.ajax(new Object())
//			getJSON 방식
//			x =>{} 시스템이 오류난다면 JAVA 코딩이 잘못된거다. 이유는 수신자 역할만 하기 때문. 그냥 아무거나 받기만 함
			$.getJSON(x.context+'/articles/'+x.pageNum,d=>{
				$.getScript(x.context+'/resources/js/view.js',()=>{
					alert('나옴?');
					$('#content').empty();
					$(createTab({
	                    id: 'articles', 
	                    clazz:''
	                }))
	                .appendTo('#content');
	                
	                $(createTh({
	                    list: ['글번호', '제목', '작성자', '작성일', '수정/삭제'],
	                    thClazz:'',
	                }))
	                 .attr('style', 'background-color: #333; color: white; height: 40px')
	                .appendTo('#articles');
	                
	                $(createTr({
	                    trList: d.list,
	                    trClazz: '',
	                    tdList: '',
	                    tdClazz: ''
	                }))
	                .attr('style', 'text-align: center; border-bottom: 1px solid gray; height: 40px')
	                .appendTo('#articles');
	                
	                $(createNav({id:'nav-page',clazz:''}))
	                .appendTo('#content');
	                $(createUL({id:'ul-page',clazz:'pagination'}))
					
	                .appendTo('#nav-page');
	                if(d.page.startPage!=1){
	                	$(createLI({id:'li-prev',clazz:''}))
	                	.appendTo('#ul-page');
	                	$(createATag({link:'#',id:'a-prev'}))
	                	.attr('onClick',app.board.articles({content:x.content,pageNum:d.page.startPage-1}))
	                	.attr('aria-label','Previous')
	                	.appendTo('#li-prev');
	                	$(createSpan({clazz:'',val:'&laquo;'}))
	                	.appendTo('#a-prev');
	                }
	                for(var i=d.page.startPage;i<=d.page.endPage;i++){
	                	$(createLI({id:'li'+i,clazz:''}))
	                	.appendTo('#ul-page');
	                	$(createATag({link:'#',id:'page'+i,link:app.board.articles({content:x.content,pageNum:x.pageNum}),val:""}))
	                	.appendTo('#li'+i);
	                	if(i==d.page.pageNum){
	                		$(createFont({val:i}))
	                		.attr('style','color:red')
	                		.appendTo('#page'+i);
//	                		.appendTo($(this));
	                	}else{
	                		$(createFont({val:i}))
	                		.appendTo('#page'+i);
//	                		.appendTo($(this));
	                		$(this)
	                		.attr('onClick',app.board.articles({content:x.content,pageNum:i}))
	                		.appendTo();
	                	}
	                }
	                if(d.page.endPage!=d.page.totalPageCount){
	                	$(createLI({id:'li-next',clazz:''}))
	                	.appendTo('#ul-page');
	                	$(createATag({link:'#',id:'a-next'}))
	                	.attr('onClick',app.board.articles({content:x.content,pageNum:d.page.endPage+1}))
	                	.attr('aria-label','Next')
	                	.appendTo('#li-next');
	                	$(createSpan({clazz:'',val:'&raquo;'}))
	                	.appendTo('#a-next');
	                }
				});
			});
		}
};
app.member=(()=>{
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		context = $.context();
		algo=$.javascript()+'/algo.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
			$('#container')
			.html($(createDiv({id:'content',clazz:'container text-center'}))
					.attr('style','width:80%;height:400px;margin:50px auto'));
			$(loginOutBox('login-inner-table'))
			.attr('style', 'margin:50px auto')
			.appendTo('#content');
			$(loginInBox('login-inner-table'))
			.appendTo('#inbox-position');
			$(createButton({id:"login-btn",clazz:"default",val:"Login"}))
			.appendTo('#div-login-btn')
			.on('click',e=>{
				e.preventDefault();//없으면 입력된값만 가져가므로 처리해야함.
				login();
			});
		});
	};
	var login=()=>{
		var userid=$('#index_input_id').val();
		var jason={
				'pass' : $('#index_input_password').val()};
		$.ajax({
			url:context+'/members/'+userid+'/login',
			method:'POST',
			data:JSON.stringify(jason),
			dataType:'json',
			contentType:'application/json',
			success : x =>{
				alert('로그인');
				if(x.success==='1'){
//                        	var jason = x.user; //추가 할게 없다면 주석 풀며 토스.
					var jason = {
							'id' : x.user.id,
							'name':x.user.name,
							'ssn':x.user.ssn,
							'phone':x.user.phone,
							'email':x.user.email,
							'addr':x.user.addr,
							'pass' : x.user.pass,
							'profile':x.user.profile};
					mypage(jason);
				}else{
					alert('로그인 실패');
				}
			},
			error : (x,h,m)=>{
				alert('로그인에서 에러발생 x='+x+', h='+h+', m='+m);
			}
		});
		
	};
	var mypage=x=>{
		alert('mypage id = '+x.id);
		$.getScript(view,()=>{
			$('#container').empty();
			$(createDiv({id:'content',clazz:'login-content'}))
			.attr('style','width:80%;height:400px;margin:0 auto')
			.appendTo('#container');
			$('#content')
			.append(createDiv({id:'biro',clazz:'row'}));
			$('#biro').append(createDiv({id:'colImg',clazz:'col-sm-2'})+createDiv({id:'colTables',clazz:'col-sm-10'}));
			$('#colImg').append(createDiv({id:'img',clazz:'table table-bordered'}));
			$('#img').append('<img src="'+$.image()+'/'+x.profile+'.jpg" width="170px" height="170px" alt="" />');
			//테이블 생성
			$('#colTables').append(makingT({clazz:'table table-bordered',jason:x,num:2}));
			$('#th-profile').remove();
			$('#td-profile').remove();
			$('#th-pass').remove();
			$('#td-pass').remove();
		});
	}
	return {onCreate : onCreate}
})();
app.algorithm=(()=>{
	var $wrapper,context,algorithm,view,iamge;
	var onCreate=()=>{
		$wrapper =$('#wrapper');
		context = $.context();
		algo=$.javascript()+'/algo.js';
		view=$.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
				$(createATag({link:'#',val:'수열',link:'#'}))
				.appendTo('#li-sequence')
				.click(()=>{
//					오버로딩
					alert('알고리즘');
					$('#container').empty();
					$('#container')
							.html($(createDiv({id:'content',clazz:'content'})));
							$('#content')
//							.css({'margin-top':'50px',
//								'width':'80%'
//							})
							.append(sequenceContext());
							$('#td-algo-arith').html($(createATag({link:'#',val:'등차수열의 합 : 1+2+3+4+..+100'}))
									.attr('style','margin-top:50px')
									.on('click',()=>{
								$('#td-algo-arith-ans').html(createInputThrTab('입력'));
									$('#resultbtn')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										if(x!==''&&x>0
												&&y!==''&&y>0
												&&z!==''&&z>0){
											$.getScript(algo,()=>{
												$('#resultText').text(arith(x,y,z));
											});
										}else{
											alert('값을 넣어 주세요');
										}
									});
							}));
							$('#td-algo-switch').html($(createATag({link:'#',val:'스위치 수열의 합 : 1-2+3-4+..-100'})).click(()=>{
								$('#td-algo-arith-ans').html(createInputThrTab('입력'));
									$('#resultbtn')
									.attr('style','margin-top:50px;margin-left:100px;width:200px;')
									.on('click',()=>{
										var x=$('#input-init-val').val();
										var y=$('#input-limit-val').val();
										var z=$('#input-diff-val').val();
										if(x!==''&&x>0
												&&y!==''&&y>0
												&&z!==''&&z>0){
											$.getScript(algo,()=>{
												$('#resultText').text(switchSeq(x,y,z));
											});
										}else{
											alert('값을 넣어 주세요');
										}
									});
							}));
							$('#td-algo-gi').html($(createATag({link:'#',val:'등비수열의 합 : 2+6+18+54+162 = 242'})).click(()=>{
								$('#td-algo-arith-ans').html(createInputThrTab('입력'));
								$('#resultbtn')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									var z=$('#input-diff-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0
											&&z!==''&&z>0){
										$.getScript(algo,()=>{
											$('#resultText').text(gioSeq(x,y,z));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
						}));
							$('#td-algo-gao').html($(createATag({link:'#',val:'팩토리의 합 : 1!+2!+3!+...'})).click(()=>{
								$('#td-algo-arith-ans').html(createInputThrTab('입력'));
								$('#resultbtn')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									var z=$('#input-diff-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0
											&&z!==''&&z>0){
										$.getScript(algo,()=>{
											$('#resultText').text(gioSeq(x,y,z));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
							}));
							$('#td-algo-pibo').html($(createATag({link:'#',val:'피보나치 수열의 합 : 1+1+2+3+5+8+13...'})).click(()=>{
								$('#td-algo-arith-ans').html(createInputThrTab('입력'));
								$('#resultbtn')
								.attr('style','margin-top:50px;margin-left:100px;width:200px;')
								.on('click',()=>{
									var x=$('#input-init-val').val();
									var y=$('#input-limit-val').val();
									if(x!==''&&x>0
											&&y!==''&&y>0){
										$.getScript(algo,()=>{
											$('#resultText').text(piboSeq(x,y));
										});
									}else{
										alert('값을 넣어 주세요');
									}
								});
							}));
//							td-algo-fac
							
//							$('#td-algo-gi').text('(-1)*2*(-3)*4*(-5)...');
				});
				$(createATag({link:'#',val:'수학'}))
				.appendTo('#li-math')
				.click(()=>{
					$.getScript(algo,()=>{
						$('#content')
//						.css({'margin-top':'50px',
//							'width':'80%'
//						})
						.append($(createMetrixTab({id:'test',clazz:'boardered',json:findByMath(),txt:'수학'})));
//						'소수의 합 구하기','최대공약수','소인수 분해하기','최대값 최소값 구하기',
//						'5의 배수의 개수와 합','7에 가장 가까운 수 구하기','화폐','사과',
//						'구구단','반배정'
						$('#a-0')
						.on('click',()=>{
							$('#result').html(createInputOneTab('입력받은 수까지의 소수의 합 구하기'));
							$('#resultbtn')
							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
							.on('click',()=>{
								var x=$('#input-init-val').val();
								if(x!==''&&x>0){
									$.getScript(algo,()=>{
										$('#resultText').text(calculminority(x));
									});
								}else{
									alert('값을 넣어 주세요');
								}
							});
						});
						$('#a-1')
						.on('click',()=>{
							$('#result').html(createInputTwoTab('두 수의 최대공약수 최소공배수'));
							$('#resultbtn')
							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
							.on('click',()=>{
								var x=$('#input-init-val').val();
								var y=$('#input-limit-val').val();
								if(x!==''&&x>0
										&&y!==''&&y>0){
									$.getScript(algo,()=>{
										$('#resultText').text('최대 공약수'+greatestCommonDivisor(x,y)+'최소공배수'+leastCommonMultiple(x,y));
									});
								}else{
									alert('값을 넣어 주세요');
								}
							});
						});
					});
				});
				$(createATag({link:'#',val:'배열'}))	
				.appendTo('#li-matrix')
				.click(()=>{
					alert('배열');
					$.getScript(algo,()=>{
						$('#container')
						.html($(createDiv('content','container')));
						$('#content')
						.css({'margin-top':'50px',
							'width':'80%'
						})
						.append($(createMetrixTab({id:'test',clazz:'boardered', json:findBymetrix(),txt:'배열'})));
//								['선택 ','버블 ','삽입','석차','이분','병합','스택'
//								'Selection ','Bubble ','Insertion','석차','이분','Merge','Stack'
							$('#a-0')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//									createSelection());
							});
							$('#a-1')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//									createBubble());
							});
							$('#a-2')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createInsertion());
							});
							$('#a-3')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createInputThrTab('입력'));
							});
							$('#a-4')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
							});
							$('#a-5')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createMerge());
							});
							$('#a-6')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createStack());
							});
							$('#a-7')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createMerge());
							});
							$('#a-8')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createStack());
							});
							$('#a-9')
							.on('click',()=>{
								$('#result').html(createInputThrTab('입력'));
	//							createMerge());
							});
						});
				});
				$(createATag({link:'#',val:'정렬'}))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
//					$('#container').html(createDiv('container',sequenceContext()))
				});
				$(createATag({link:'#',val:'응용'}))
				.appendTo('#li-application')
				.click(()=>{
					
				});
		});
		
	};
	return {onCreate:onCreate}
})();