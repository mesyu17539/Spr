var app=app || {};
//즉시실행 : 객체 리터럴
app = {init:x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
//					함수 이용하기▽
			$.extend(new Router(x));
			app.algorithm.onCreate();
			app.member.onCreate();
		})
	}};
app.board={
		articles : x=>{
			//JSON으로 받음. {:}
			alert('전달 받은 값'+x);
//			객체(데이터)를 주고 받기에 느리고 오류나면 전송,수신자 모두 봐야한다
//			$.ajax(new Object())
//			getJSON 방식
//			x =>{} 시스템이 오류난다면 JAVA 코딩이 잘못된거다. 이유는 수신자 역할만 하기 때문. 그냥 아무거나 받기만 함
			$.getJSON(x+'/articles',d=>{
				$.getScript(x+'/resources/js/view.js',()=>{
					$('#content').empty();
					$(createTab({
	                    id: 'articles', 
	                    clazz:''
	                }))
	                .appendTo('#content');
	                
	                $(createTh({
	                    list: ['글번호', '제목', '작성자', '작성일', '수정/삭제'],
	                    thClazz:'',
	                })).appendTo('#articles');
	                
	                
	                $(createTr({
	                    trList: d,
	                    trClazz: '',
	                    tdList: '',
	                    tdClazz: ''
	                }))
	                .appendTo('#articles');
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
			$(createDiv({id:'content',clazz:'login-content'}))
			.attr('style','width:30%;height:400px;margin:50px auto')
			.appendTo('#container');
			$(loginOutBox('login-inner-table'))
			.appendTo('#content');
			$(loginInBox('login-inner-table'))
			.appendTo('#inbox-position');
			$(createButton({id:"login-btn",clazz:"default",val:"Login"}))
			.appendTo('#div-login-btn')
			.on('click',e=>{
				e.preventDefault();//없으면 입력된값만 가져가므로 처리해야함.
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
			});
		});
	};
	var login=x=>{
		
	};
	var mypage=x=>{
		alert('mypage id = '+x.id);
		$.getScript(view,()=>{
			$('#container').empty();
			$(createDiv({id:'content',clazz:'login-content'}))
			.attr('style','width:80%;height:400px;margin:50px auto')
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
		$wrapper.empty();
		$.getScript(view,()=>{
//			람다 ALL : 이해하기 어렵다
			$wrapper.html(navigtion());
			
			$(createDiv({id:'container',clazz:'login-contanier'}))
			.attr('style','width:100%;height:500px')
			.appendTo($wrapper);
			
				$(createButtonNav1st())
				.appendTo('#div-nav-list-box')
				.click(()=>{
					alert('button 클릭');
				});
//				오버라이딩
				$(createATag({id:'a-login',val:createSpan({clazz:'glyphicon-user',val:'로그인'})}))
				.appendTo('#li-login')
				.click(()=>{
					alert('Login btn Click');
					app.member.onCreate();
				});
				
				$(createATag({val:createSpan({clazz:'glyphicon-blackboard',val:'보드'})}))
				.appendTo('#li-board')
				.click(()=>{
					alert('보드 btn Click');
					 app.board.articles(context);
				});
				
				$(createATag({val:'수열'}))
				.appendTo('#li-sequence')
				.click(()=>{
//					오버로딩
					alert('알고리즘');
					$('#container').empty();
					$('#container')
							.html($(createDiv({id:'content',clazz:'content'})));
							$('#content')
							.css({'margin-top':'50px',
								'width':'80%'
							})
							.append(sequenceContext());
							
							$('#td-algo-arith').html($(createATag({val:'등차수열의 합 : 1+2+3+4+..+100'}))
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
							$('#td-algo-switch').html($(createATag({val:'스위치 수열의 합 : 1-2+3-4+..-100'})).click(()=>{
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
							$('#td-algo-gi').html($(createATag({val:'등비수열의 합 : 2+6+18+54+162 = 242'})).click(()=>{
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
							$('#td-algo-gao').html($(createATag({val:'팩토리의 합 : 1!+2!+3!+...'})).click(()=>{
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
							$('#td-algo-pibo').html($(createATag({val:'피보나치 수열의 합 : 1+1+2+3+5+8+13...'})).click(()=>{
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
				$(createATag({val:'수학'}))
				.appendTo('#li-math')
				.click(()=>{
					$.getScript(algo,()=>{
						$('#container')
						.html($(createDiv({id:'content',clazz:'content'})));
						$('#content')
						.css({'margin-top':'50px',
							'width':'80%'
						})
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
				$(createATag({val:'배열'}))	
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
				$(createATag({val:'정렬'}))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
//					$('#container').html(createDiv('container',sequenceContext()))
				});
				$(createATag({val:'응용'}))
				.appendTo('#li-application')
				.click(()=>{
					
				});
		});
		
	};
	return {onCreate:onCreate}
})();