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
//	+'          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" +aria-expanded="false" aria-controls="navbar">'
//	+'          <span class="sr-only">Toggle navigation</span>'
//	+'            <span class="icon-bar"></span>'
//	+'            <span class="icon-bar"></span>'
//	+'            <span class="icon-bar"></span>'
//	+'          </button>'
	+'          </div><a class="navbar-brand" href="#">'
	+'          BITCAMP</a>'
	+'        </div>'
	+'        <div id="navbar" class="collapse navbar-collapse">'
	+'          <ul class="nav navbar-nav">'
	+'                    <li id="li-login">'
	+'                    </li>'
	+'            <li class="active"><a href="#">'
	+'            <span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;home'
	+'            </a></li>'
	+'            <li><a href="#">'
	+'              <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>&nbsp;QA'
	+'            </a></li>'
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
var createHTag=(x,y)=>{
	return '<h'+x+'>'+y+'</h'+x+'>';
}
var createDiv=(x,y)=>{
	return '<div id="'+x+'" class="'+x+'">'+y+'</div>';
}
function sequenceContext(){
//	'<div class="container" style="margin-top:50px;">'
	return '<table class=table table-boardered>'
	+'  <tr>'
	+'    <th colspan="4">공식</th>'
	+'    <th>등차수열 답</th>'
	+'  </tr>'
	+'  <tr>'
	+'    <td colspan="4">1-2+3-4+..-100</td>'
	+'    <td rowspan="4">답안지</td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td colspan="4">1+2+4+7+11...</td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td colspan="4">(-1)*2*(-3)*4*(-5)</td>'
	+'  </tr>'
	+'  <tr>'
	+'    <td colspan="4">1+1+2+3+5+8+13+...</td>'
	+'  </tr>'
	+'</table>';
}
var createATag=x=>{
	return '<a href="#"> '+x+'</a>';
}
var createSpan=(x,y)=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true">&nbsp;'
	+y+'</span>';
}