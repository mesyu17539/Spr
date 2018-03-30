var fileupload=x=>{
	return '  <div id="'+x.id+'" class="'+x.clazz+'">'
	+'    <h1>ATTACH FILES</h1>'
	+'  <h2>ATTACH UP TO 10 files at a time Total.... 200MB</h2>'
	+'  <div class="row">'
	+'    <div class="col-md-6 col-md-offset-3">'
	+'      <input style="display: inline-block;" size="30" name="file" type="file" placeholder="ATTACH FILES" />'
	+'    </div>'
	+'  </div>'
	+'  <button>Cancel</button>'
	+'  <button>ATTACH BTN</button>'
	+'  <!-- link that opens popup -->'
	+'</div>'
}

var boardWriting=x=>{
	return '  <div id="'+x.id+'" class="'+x.clazz+'">'
	+'    <h2>글쓰기<br/>'
	+'    <small>Title(제목), Content(내용)을 완성하시고 전송을 눌러주세요.</small>'
	+'    </h2><br/>'
	+'    <!-- 글번호, 제목, 작성자, 작성일 -->'
	+'        <div class="form-group">'
	+'            <label for="usr">제목</label>'
	+'            <input name="brotitle" type="text" class="form-control"><br/>'
	+'            <label for="comment">내용</label>'
	+'                  <textarea name="brocontent" id="contents" class="form-control" rows="15" ></textarea>'
	+'                  <img src="#" style="width: 80px;height: 80px;" alt="" />'
	+'        </div>'
	
	+'    <div class="row">'
	+'        <div class="col-sm-8"></div>'
	+'        <div class="col-sm-4">'
	+'            <div id="div-btn-group" class="btn-group">'
	+'                <a id="submit-btn" href="#" class="btn btn-success">전송</a>'
	+'                <a id="cancel-btn" href="#" class="btn btn-danger">취소</a>'
	+'            </div>'
	+'        </div>'
	+'    </div>'
//	이미지들
	  +'<a class="image-popup-vertical-fit" href="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg" title="Caption. Can be aligned to any side and contain any HTML.">'
	+'    <img src="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg" width="75" height="75">'
	+'  </a>'
	  +'<a class="image-popup-fit-width" href="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_b.jpg" title="This image fits only horizontally.">'
	+'    <img src="http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg" width="75" height="75">'
	+'  </a>'
	+'  <a class="image-popup-no-margins" href="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg">'
	+'    <img src="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg" width="107" height="75">'
	+'  </a>'
	+'  <!-- link that opens popup -->'
	+'</div>'
}
var createTab=x=>{
	var tab='<table id="'+x.id+'" class="'+x.clazz+'"></table>';
	return tab;
}
var createNav=x=>{
	return '<nav id="'+x.id+'" class="'+x.clazz+'"></nav>';
}
var createFont=x=>{
	return '<font>'+x.val+'</font>'
}
var createTr=x=>{
   var temp = '';
   var num=0;
   $.each(x.trList, (i,j)=>{
       temp +='<tr id="tr_'+num+'" class="'+x.trClazz+'">'
                   +createTd({
                       list: j,
                       q: (num++),
                       clazz: x.tdClazz
                       })+'</tr>';
   });
   return temp;
}
var createTd=x=>{
   var temp = '';
   var w=0;
    $.each(x.list,(k,j)=>{
        if((w++)!=2){
        	temp +='<td id="td_'+x.q+'_'+w+'" class="'+x.clazz+w+'">'
        			+'&nbsp;'+j+'</td>';
        }
    });
   return temp;
}
var createTh=x=>{
	   var temp = '';
	 $.each(x.list,(k,j)=>{
	        temp +='<td class="'+x.clazz+'">'
	                +'&nbsp;'+j+'</td>';
	    });
	   return temp;
}
var makingTable=(y,txt)=>{
    var tab = '<table class = "'+y+'">'

    var arr = [1,2,3,4];
    $.each(arr,(i,j)=>{
        tab +='<tr>'
            +'<td id ="a'+j+'"></td>'
            +'<td id ="b'+j+'"></td>'
            +'<td id ="c'+j+'"></td>'
            +'<td id ="d'+j+'"></td>'
            +'<td id ="e'+j+'"></td>'
            +'</tr>';
    });
    tab += '</table>';
    return tab;
}
var makingT=x=>{
    var tab = '<table class = "'+x.clazz+'">'
    tab +='<tr>';
    var flag=0;
    $.each(x.jason,(i,j)=>{
        tab +='<th id ="th-'+i+'">'+i+'</th>'
            +'<td id ="td-'+i+'">'+j+'</td>';
        flag++;
        if(flag%x.num==0){
        	tab+='</tr><tr>';
        }
    });
    tab +='</tr>';
    tab += '</table>';
    return tab;
}
var mypagep=x=>{
	return '<table class="'+x+'">'
	+  '<tr>'
	+    '<th rowspan="6" class="shema"><img src="" alt="" /></th>'
	+    '<th class="shema">ID</th>'
	+    '<td id="td-id"></td>'
	+    '<th class="shema">생년월일</th>'
	+    '<td id=""></td>'
	+  '</tr>'
	+  '<tr>'
	+    '<th class="shema">가입일</th>'
	+    '<td id=""></td>'
	+  '</tr>'
	+  '<tr>'
	+    '<th class="shema">비밀번호</th>'
	+    '<td id=""></td>'
	+    '<th class="shema">전화번호</th>'
	+    '<td id="td-phone">'
	+    '</td>'
	+  '</tr>'
	+  '<tr>'
	+    '<th class="shema">이름</th>'
	+    '<td id=""></td>'
	+    '<th class="shema">이메일</th>'
	+    '<td id=""></td>'
	+  '</tr>'
	+  '<tr>'
	+    '<th class="shema">성별</th>'
	+    '<td></td>'
	+    '<th class="shema">주소</th>'
	+    '<td id=""></td>'
	+  '</tr>'
	+  '<tr>'
	+    '<th class="shema">회원번호</th>'
	+    '<td id=""></td>'
	+    '<th class="shema">ACCOUNT</th>'
	+    '<td id=""></td>'
	+  '</tr>'
	+'<tr><td colspan="5"><button id="bitcam_passbtn">비밀번호 변경</button> <button id="bitcam_leavebtn">탈퇴</button></td></tr>'
	+'</table>'
}
var createButton=x=>{
	return  '<button type ="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
}
var loginOutBox=(x)=>{
	return '<table class="'+x+'">'
	+'      <tr>'
	+'			<td id="inbox-position"></td>'
	+'      </tr>'
	+'      <tr>'
	+'        <td>'
	+'        <a id="go_join_link" href="#">'
	+'          처음 오셨나요 '
	+'        </a>'
	+'        <a id="go_admin_link" href="#">'
	+'          관리자'
	+'        </a>'
	+'        </td>'
	+'      </tr>'
	+'</table>'
}
var loginInBox=(x)=>{
	return '<table class="'+x+'">'
	+'            <tr>'
	+'              <td><input id="index_input_id" name="id" type="text" placeholder="id" tabindex="1" value="ㅊㅊㅊ"/></td>'
	+'              <td rowspan="2"><div id="div-login-btn"></div></td>'
	+'            </tr>'
	+'            <tr>'
	+'              <td><input id="index_input_password" name="pass" type="password" placeholder="pass" tabindex="2" value="ccc"/>'
	+'              </td>'
	+'            </tr>'
	+'          </table>'
}
function navigtion(){
	return '<style>'
	+'  .jumbotron {'
	+'    margin: 0 auto;'
	+'  }'
	+'  .bg {'
	+'    background-image: url("'+$.image()+'/chicago.jpg");'
	+'  }'
	+'</style>'
	+'<div class="jumbotron bg" style="padding-left: 30px;">'
	+'  <h1 style="color: white;">Welcome to Bitcamp</h1>'
	+'</div>'
	+'<nav class="navbar navbar-inverse">'
	+'      <div class="container-fluid">'
	+'        <div class="navbar-header"><div id="div-nav-list-box">'
	+'          </div><a class="navbar-brand" href="#">'
	+'          BITCAMP</a>'
	+'        </div>'
	+'        <div id="navbar" class="collapse navbar-collapse">'
	+'          <ul class="nav navbar-nav">'
	+'                    <li id="li-login">'
	+'                    </li>'
	+'            <li id="li-home" class="active"><a href="#">'
	+'            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;home'
	+'            </a></li>'
	+'            <li><a href="#">'
	+'              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>&nbsp;QA'
	
	+'            </a></li>'
	+'            <li id="li-board"></li>'
	+'        <!-- 드롭다운 START-->'
	+'        <li class="dropdown">'
	+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true" +aria-expanded="false">'
	+'            유틸리티'
	+'            <span class="caret"></span>'
	+'          </a>'
	+'          <ul id="ul-util" class="dropdown-menu">'
	+'            <li id="li-sequence" href="#"></li>'
	+'            <li id="li-math" href="#"></li>'
	+'            <li id="li-matrix" href="#"></li>'
	+'            <li id="li-sort" href="#"></li>'
	+'            <li id="li-application" href="#"></li>'
	+'          </ul>'
	+'        </li>'
	+'        <!-- 드롭다운 END -->'
	+'          </ul>'
	+'        </div>'
	+'      </div>'
	+'    </nav>'
}
function createButtonNav1st(){
	return '<button id="btn-nav-list" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" +aria-expanded="false" aria-controls="navbar">'
	+'          <span class="sr-only">Toggle navigation</span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'            <span class="icon-bar"></span>'
	+'          </button>';
}
var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
}
var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
//	return '<div id="'+x+'" class="'+x+'">y</div>';
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createText=x=>{
	return '<span id="'+x+'"></span>';
}
var createSList=x=>{
	var t='';
	$.each(x,function(i,j){
		t+='<td>'+j+'</td>'
	});
	return t;
}
var createFlag=x=>{
	return '<td id="flag-'+x.id+'"></td>';
}
var createTPI=x=>{
	var t='';
	$.each(x,function(i,j){
		t+='<td>'+i+'</td>'
	});
	return t;
}
var createMathTab=x=>{
	var tab = '<table id="'+x.id+'" class="table table-'+x.clazz+'">'
	+'<tr>'
	+'<th colspan="5">' + x.txt + '</th>'
	+'</tr>';
	$.each(JSON.parse(x.json), (i, j)=>{
		tab +='<tr>'
			+'<td>'+j.a+'</td>'
			+'<td>'+j.b+'</td>'
			+'<td>'+j.c+'</td>'
			+'<td>'+j.d+'</td>'
			+'<td>'+j.e+'</td>'
			+'</tr>';
	});
	tab += '</table>';
	return tab;
}
var createMetrixTab=x=>{
	var tab='<table id="'+x.id+'" class="table table-'+x.clazz+'">'
	+'<tr>'
	+'<th colspan="5">' + x.txt + '</th>'
	+'</tr>';
	$.each(x.json,(i,j)=>{
		tab +='<tr>'
			+'<td style="width:50%"><a id="a-'+i+'">'+i+'. '+j+'</a></td>';
			if(i==0){
				tab +='<td style="width:50%" id="result" rowspan="'+(x.json.length+1)+'">테스트</td>'
			}
			tab +='</tr>';
	});
	tab+='</table>';
	return tab;
}
var createInputText=x=>{
	return '<input id="'+x.id+'" class="'+x.clazz+'" type="text"/>';
}
var createInputThrTab=x=>{
	return '<table>'
	+'<tr>'
	+'<th colspan="5">' + x + '</th>'
	+'</tr>'
	+'  <tr>'
	+'    <th>초기값</th>'
	+'    <td><input id="input-init-val" type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <th>제한값</th>'
	+'    <td><input id="input-limit-val"  type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <th>공차</th>'
	+'    <td><input id="input-diff-val"  type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td>결과값</td>'
	+'    <td id="resultText"><button id="resultbtn">결과값</button></td>'
	+'  </tr>'
	+'</table>'
}
var createInputTwoTab=x=>{
	return '<table>'
	+'<tr>'
	+'<th colspan="5">' + x + '</th>'
	+'</tr>'
	+'  <tr>'
	+'    <th>첫번째 값</th>'
	+'    <td><input id="input-init-val" type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <th>두번째 값</th>'
	+'    <td><input id="input-limit-val"  type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td>결과값</td>'
	+'    <td id="resultText"><button id="resultbtn">결과값</button></td>'
	+'  </tr>'
	+'</table>'
}
var createInputOneTab=x=>{
	return '<table>'
	+'<tr>'
	+'<th colspan="5">' + x + '</th>'
	+'</tr>'
	+'  <tr>'
	+'    <th>입력할 숫자</th>'
	+'    <td><input id="input-init-val" type="text" name=""></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td>결과값</td>'
	+'    <td id="resultText"><button id="resultbtn">결과값</button></td>'
	+'  </tr>'
	+'</table>'
}
var sequenceContext=()=>{
//	'<div class="container" style="margin-top:50px;">'
//	return x+'<table class="table table-boardered">'
	return '<table id="tab-algo" class="table table-boardered">'
	+'  <tr>'
	+'    <th colspan="4">공식</th>'
	+'    <th>등차수열 답</th>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-arith" colspan="4"></td>'
	+'    <td id="td-algo-arith-ans">답안지</td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-switch" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-gao" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-gi" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-pibo" colspan="4"></td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td id="td-algo-fac" colspan="4"></td>'
	+'  </tr>'
	+'</table>';
}

var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'"> '+x.val+'</a>';
}
var createAria=x=>{
	return '<a id="'+x.id+'" href="#"'
	 +'onclick="'+x.link+'" aria-label="'+x.label+'"></a>';
//	app.boardList(${page.startPage-1}); return false;
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true">&nbsp;'
	+x.val+'</span>';
}