var arith =(x,y,z)=>{
	//등차 수열은 x 초기값, y 리밋값 =20번째, z 공차
	//1+2+3+4+5+...
//	string*1 하면 int 형이 됩니다.
	var sum=0;
	sum=x*1;
	for(var i=1;i<y*1;i++){
		sum+=z*1;
	}	
	return sum;
}
var switchSeq = (x,y,z)=>{
//	스위치 수열 x 초기값, y 리밋값 =20번째, z 공차
//	1-2+3-4+5...-100 = -50
//	i 1씩 증가하는 숫자 저장
//	J i의 값 계산되어 저장
//	SW + - 연산자 판단할 값 저장
	var i, J, SW;
	i=(x*1);
	J=0;
	SW=i%2;//
	for(;i<=(y*1);i+=(z*1)){
		switch (SW) {
		case 1:
			J+=i;
			SW=0;
			break;
		default:
			J-=i;//
			SW=1;//
			break;
		}
	}
	return +J;
}
var gioSeq=(x,y,z)=>{
//	등비수열
//	(x=2)+6+18+54+162 = 242
//	y= 5번째까지
//	 z*3
	var J;
	var sum=0,A=(x*1);
	for(var i=0;i<y;i++){
		sum+=A;
		A*=(z*1);
	}
	return sum;
}
var piboSeq=(x,y)=>{
//	피보나치 1+1+2+3+5+8+13...
//	(x=1)+1+2+3+5+8+13 = 
//	y= 5번째까지
//	 X.1 +X.0 = X.2
	var A,B,C;
	A=x*1;
	B=x*1;
	var sum=A+B;
	for(var i=2;i<y;i++){
		C=A+B;
		sum+=C;
		B=A;
		A=C;
	}
	return sum;
}
var facSeq=()=>{
	return '';
}
var findMath=()=>{
	var a = new Array();
	var o = null;
	var k = 1;
	for(var i=0; i<5; i++){
	    o = new Object();
	    o.a = k++;
	    o.b = k++;
	    o.c = k++;
	    o.d = k++;
	    o.e = k++;
	    a.push(o);
	}
	return JSON.stringify(a);
}
var findByFive=()=>{
	var stx=new Array(new Array(5),new Array(5),
					new Array(5),new Array(5),new Array(5));
	var x=[
//		 key : value
		{ a:1, b:2, c:3, d:4, e:5 },
		{ a:6, b:7, c:8, d:9, e:10 },
		{ a:11, b:12, c:13, d:14, e:15 },
		{ a:16, b:17, c:18, d:19, e:20 },
		{ a:21, b:22, c:23, d:24, e:25 }
		];
	
	return x;
}
var findBymetrix=()=>{
	return ['선택','버블','삽입','석차','이분','병합','스택']
}