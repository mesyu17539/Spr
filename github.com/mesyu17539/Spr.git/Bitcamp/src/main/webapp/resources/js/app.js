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
			app.member.onCreate();
		})
	};
	return {init:init}
})();
app.member=(()=>{
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
//			$wrapper.append(loginp('login-outer-table'));
			$(createDiv('container','login-contanier'))
			.attr('style','width:100%;height:500px;border:2px solid red')
			.appendTo($wrapper);
			$(createDiv('content','login-content'))
			.attr('style','width:40%;height:300px;border:2px solid blue;margin:50px auto')
			.appendTo('#container');
			$(loginOutBox('login-inner-table'))
			.appendTo('#content');
			$(loginInBox('login-inner-table'))
			.appendTo('#inbox-position');
			$(createButton("login-btn","default","Login"))
			.appendTo('#div-login-btn')
			.on('click',e=>{
				e.preventDefault();//없으면 입력된값만 가져가므로 처리해야함.
				var jason={
                        'id' : $('#index_input_id').val(),
                        'pass' : $('#index_input_password').val()};
				$.ajax({
					url:context+'/member/login',
					method:'POST',
					data:JSON.stringify(jason),
					dataType:'json',
					contentType:'application/json',
					success : x =>{
                        alert('로그인');
                        if(x.success==='1'){
                        	alert('로그인 성공');
                            var jason = {
                                    id : x.user.id
                            };
//                            mypage(jason);
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
	var login=()=>{
		
	};
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
					$('#container').empty();
					$('#container')
							.html($(createDiv('content','content')));
							$('#content')
							.css({'margin-top':'50px',
								'width':'80%'
							})
							.append(sequenceContext());
							
							$('#td-algo-arith').html($(createATag('등차수열의 합 : 1+2+3+4+..+100'))
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
							$('#td-algo-switch').html($(createATag('스위치 수열의 합 : 1-2+3-4+..-100')).click(()=>{
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
							$('#td-algo-gi').html($(createATag('등비수열의 합 : 2+6+18+54+162 = 242')).click(()=>{
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
							$('#td-algo-gao').html($(createATag('팩토리의 합 : 1!+2!+3!+...')).click(()=>{
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
							$('#td-algo-pibo').html($(createATag('피보나치 수열의 합 : 1+1+2+3+5+8+13...')).click(()=>{
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
				$(createATag('수학'))
				.appendTo('#li-math')
				.click(()=>{
					$.getScript(algo,()=>{
						$('#container')
						.html($(createDiv('content','container')));
						$('#content')
						.css({'margin-top':'50px',
							'width':'80%'
						})
						.append($(createMetrixTab('test','boardered',findByMath(),'수학')));
//						.append($(createMathTab('test','boardered',findMath(),'수학')));
//						for(;;){
//							$('#td-'+i)
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(piboSeq(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						}
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
//						$('#a-2')
//						.on('click',()=>{
//							$('#result').html(createInputOneTab('소인수 분해하기'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								if(x!==''&&x>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(primeFactorization(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
////						오류 파라미터 맞출것
//						$('#a-3')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('최대값 최소값 구하기'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(maxNum(x,y,z)+minNum(x,y,z));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-4')
//						.on('click',()=>{
//							$('#result').html(createInputOneTab('5의 배수의 개수와 합'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								if(x!==''&&x>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(fiveMultipleSum(x));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-5')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('7에 가장 가까운 수 구하기'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(findNearNum(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-6')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('화폐'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(greatestCommonDivisor(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-7')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('입력'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(greatestCommonDivisor(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-8')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('입력'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(greatestCommonDivisor(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
//						$('#a-9')
//						.on('click',()=>{
//							$('#result').html(createInputThrTab('입력'));
//							$('#resultbtn')
//							.attr('style','margin-top:50px;margin-left:100px;width:200px;')
//							.on('click',()=>{
//								var x=$('#input-init-val').val();
//								var y=$('#input-limit-val').val();
//								if(x!==''&&x>0
//										&&y!==''&&y>0){
//									$.getScript(algo,()=>{
//										$('#resultText').text(greatestCommonDivisor(x,y));
//									});
//								}else{
//									alert('값을 넣어 주세요');
//								}
//							});
//						});
					});
				});
				$(createATag('배열'))	
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
						.append($(createMetrixTab('test','boardered', findBymetrix(),'배열')));
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
				$(createATag('정렬'))
				.appendTo('#li-sort')
				.click(()=>{
					alert('정렬');
//					$('#container').html(createDiv('container',sequenceContext()))
				});
				$(createATag('응용'))
				.appendTo('#li-application')
				.click(()=>{
					
				});
		});
		
	};
	return {onCreate:onCreate}
})();