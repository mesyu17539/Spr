// 수학
//소수 판별
var primeNumber=x=>{
    var x = x*1;
    var str = "";
    for(var i=2; i<=x; i++){
        if((x%i) == 0) {
            str = "No!";
        } else {
            str = "Yes!";
        }
    }
    return str;
};
//소수 갯수
var primeNumberCount=x=>{
    var x = x*1;
    var k = 2
    var count = 0;
    var str = "";
    for(var i=2; i<=x; i++) {
        console.log(count);
        for(var j=2; j<=i; j++){
            if((i%j)==0) {
                if(i==j) {
                    count++;
                    break;
                } else {
                    break;
                }
            }
        }
    }
    return str+count;
};
//소수 합
var primeNumberSum=x=>{
    var x = x*1;
    console.log(x);
    var sum = 0;
    var a, b;
    var str = "";
    a = 2;
    for(;;){
        b=2;
        for(;;){
            if(a % b == 0) {
                if(a == b) {
                    sum += a;
                    break;
                } else {
                    break;
                }
            } else {
                b++;
            }
        }
        if(a < x){
            a++;
            continue;
        } else {
            break;
        }
    }
    return str+sum;
};
// 최대 공약수
var  greatestCommonDivisor=(x, y)=>{
	var a=x*1,b=y*1;
	var big = (a>b) ? a : b;
	var small= (a<b) ? a : b;
	var result=0;
	for(var i=small;i>0;i--){
		if((small%i)==0){
			if((big%i)==0){
				result=i;
				break;
			}
		}
	}
	return result;
//    var x = x*1, y = y*1;
//    var j;
//    var temp;
//    var str = "";
//    j = (x<y) ? x : y;
//    for(var i=1; i<=j; i++){
//        if(x%i == 0 && y%i == 0) {
//            temp = i;
//        }
//    }
//    return str+temp;
}; 
// 최소 공배수
var leastCommonMultiple=(x, y)=>{
	var a=x*1,b=y*1;
	var big = (a>b) ? a : b;
	var small= (a<b) ? a : b;
	var result=0;
	for(var i=small;i>0;i--){
		if((small%i)==0){
			if((big%i)==0){
				result=i*small;
				break;
			}
		}
	}
	return result;
//    var x = x*1, y = y*1;
//    var j;
//    var temp;
//    var str = "";
//    j = (x>y) ? x : y;
//    for(var i=j;;i++){
//        if(i%x==0 && i%y==0) {
//            temp = i;
//            break;
//        }
//    }
//    return str+temp;
};
// 소인수분해
var primeFactorization=x=>{
    var x = x*1;
    var s = new Array(20);
    var c = "";
    for(var i=2; i<=x; i++){
        if(x%i == 0) {
            if(x==i) {
                c += i;
                x = x/i;
                i--;
            } else {
                c += i+"X";
                x = x/i;
                i--;
            }
        } 
    }
    return c;
};
//최대값
var maxNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var max = num[0];
    var str = "";
    for(var i=1; i<5; i++){
        if(max < num[i]) {
            max = num[i];
        }
    }
    return str + max;
};
//최소값
var minNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var min = num[0];
    var str = "";
    for(var i=1; i<5; i++){
        if(min > num[i]) {
            min = num[i];
        }
    }
    return str + min;
};
//5배수 합
var fiveMultipleSum=x=>{
    var x=x*1;
    var sum=0;
    var str="";
    for(var i=1; i<=x; i++){
        if(i%5==0) {
            sum += i;
        }
    }
    return str+sum;
};
//7에 가까운 수
var findNearNum=(x, y, z, a, b)=>{
    var x=x*1, y=y*1, z=z*1, a=a*1, b=b*1;
    var num = [x,y,z,a,b];
    var near = 7;
    var min = 9;
    var nearNum = 0;
    var str = "";
    for(var i=0; i<num.length; i++){
        var abs = Math.abs(num[i] - near);
        if(min > abs) {
            min = abs;
            nearNum = num[i];
        }
    }
    return str + nearNum;
};

var calculminority=x=>{
	//소수의 합
//	정수를 입력 받아 그안에 포함된 소수의 합을 구하는 순서도를 작성
	var A=x*1;
	var sum=1;
	var count;
	for(var i=2;i<=A;i++){
		count=0;
		for(var j=i-1;j>=1;j--){
			if(i%j==0){
				count++;
			}
		}
		if(count<=1){
			sum+=i
		}
	}
	return sum;
}

var calculBig=(x,y)=>{
	var r=1;
	var lcm;
	var tmp1=x*1,temp2=y*1;
	if(x*1<y*1){
		tmp1
	}
	return '최소공배수 : '+min;
}
// 배열
var createSelection=()=>{
	
	return '끗';
}
var createBubble=()=>{
	
	return '끗';
}
var createInsertion=()=>{
	
	return '끗';
}
var createMerge=()=>{
	
	return '끗';
}
var createStack=()=>{
	
	return '끗';
}
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
//팩토리얼
var fact =(x, y)=>{
    var  x = x*1, y = y*1;
    var sum = 0;
    var k = x;
    var str = "";
    for(var i=1; i<=y; i++) {
        k *= i;
        sum += k;
    };
    return str+sum;
};
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
	return ['선택','버블','삽입','석차','이분','병합','스택'];
}
var findByMath=()=>{
	return ['소수의 합 구하기','최대공약수','소인수 분해하기','최대값 최소값 구하기','5의 배수의 개수와 합','7에 가장 가까운 수 구하기','화폐','사과','구구단','반배정'];
}