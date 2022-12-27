/*
### 타입스크립트 소개
#### 타입스크립트의 장점
- 타입이 없다는 것
- 안정성, 컴파일 단계에서 미리 오류를 감지할 수 있다
- 가독성, 타입을 보고 무엇을 하는지 미리 볼 수 있다.
#### 타입스크립트 단점
- 초기 설정을 해야한다.
- 스트립트 언어의 유연성이 낮아진다.
- 컴파일 시간이 길어질 수 있다.
#### 1. 타입 주석과 타입 주문
*/

let a: number;
let b = 2;
let c: boolean = false;
let d: string = 'TS';
let f = { a: 1}; 
//f.b = 2; //이런거 안됨
let g: any = 3;
g = '1';
g = false;
let h: number[] = [];
h.push(1);
//h.push(''); //이것도 당연히 안되겠쥬?
let i: 'good' = 'good';

function add(a: number, b:number):number {
   return a+b 
}

//인터페이스: 객체의 타입을 정의하는 방법. interface라는 키워드로 가능하다.
interface Company{
   name:string;
   age:number;
   address?:string; //?붙으면 필수아님
}

const cobalt: Company = {
   name:'hi',
   age:20,
}

const person : {
   name:string,
   age?:number
} = {
   name:'kimsunghyun',
   age:100
}

//튜플: 배열을 튜플로 이용하는 방법
const tuple:[string, number] =['',100]

//enum: 열거형을 사용하는 방법
enum Color{
   RED = 'red',
   GREEN = 'green',
   BLUE = 'blue'
}
const color = Color.BLUE;

//대수타입: 여러 자료형의 값을 가질 수 있게하는 방법. 합집합 타입과 교집합 타입이 있음
let numOrStr: number | string = 1
numOrStr = 'str'
numOrStr = 111

//let numAndStr: number & string = '' //이런건 불가능 하니까 원시타입에서는 사용 불가
interface Name{
   name:string;
}
interface Age{
   age:number;
}

let hi: Name & Age = {
   name:'kim',
   age:30
}

type Person = Name&Age;
let hi2:Person = {
   name:'zz',
   age:13
}