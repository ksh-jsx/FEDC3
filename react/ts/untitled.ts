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
let d: string = "TS";
let f = { a: 1 };
//f.b = 2; //이런거 안됨
let g: any = 3;
g = "1";
g = false;
let h: number[] = [];
h.push(1);
//h.push(''); //이것도 당연히 안되겠쥬?
let i: "good" = "good";

function add(a: number, b: number): number {
  return a + b;
}

//인터페이스: 객체의 타입을 정의하는 방법. interface라는 키워드로 가능하다.
interface Company {
  name: string;
  age: number;
  address?: string; //?붙으면 필수아님
}

const cobalt: Company = {
  name: "hi",
  age: 20,
};

const person: {
  name: string;
  age?: number;
} = {
  name: "kimsunghyun",
  age: 100,
};

//튜플: 배열을 튜플로 이용하는 방법
const tuple: [string, number] = ["", 100];

//enum: 열거형을 사용하는 방법
enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}
const color = Color.BLUE;

//대수타입: 여러 자료형의 값을 가질 수 있게하는 방법. 합집합 타입과 교집합 타입이 있음
let numOrStr: number | string = 1;
numOrStr = "str";
numOrStr = 111;

//let numAndStr: number & string = '' //이런건 불가능 하니까 원시타입에서는 사용 불가
interface Name {
  name: string;
}
interface Age {
  age: number;
}

let hi: Name & Age = {
  name: "kim",
  age: 30,
};

type Person = Name & Age;
let hi2: Person = {
  name: "zz",
  age: 13,
};

//optional
interface Post {
  title: string;
  content: string;
}

interface ResponseData {
  post?: Post;
  message?: string;
  status: number;
}

const response: ResponseData[] = [
  {
    post: {
      title: "Hello",
      content: "How are you?",
    },
    status: 200,
  },
  {
    message: "Error",
    status: 500,
  },
];
console.log(response[0].post?.title); //?통해 데이터 없는 경우 처리
console.log(response[1].post?.title);

//generic: 하나의 인터페이스로 여러 타입을 이용할 수 있게 하는 방법
interface Value {
  value: number;
}
interface ValueString {
  value: string;
}
interface ValueBool {
  value: boolean;
}
//이런식으로 만드는 것은 너무 귀찮은 것이에오 제네릭을 통해 아래처럼 하나로 표현 가능

interface Value2<T> {
  value: T;
}
const value: Value2<number> = {
  value: 1,
};

function toString<T>(a: T): string {
  return `${a}`;
}
console.log(toString("5")); //이런 형식에선<>생략 사능

//partial, required, pick, omit 기존 인터페이스를 재활용할 수 있게 만든다
interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}
//모든 필드가 Optional이 된다
const partial: Partial<User> = {
  id: 1,
};
//모든 필드가 Required이 된다
const required: Required<User> = {
  id: 1,
  name: "string",
  age: 1,
  address: "string",
  createdAt: "string", //이부분도 필수도 바뀜
  updatedAt: "string",
};
//특정 필드만 골라서 사용할 수 있다
const pick: Pick<User, "name" | "age"> = {
  name: "",
  age: 1,
};
//특정 필드만 빼고 사용할 수 있다
const omit: Omit<User, "name" | "age"> = {
  id: 1,
  address: "string",
};
const mixed: Omit<User, "id" | "address" | "age" | "createdAt" | "updatedAt"> &
  Pick<Partial<User>, "address" | "age"> = {
  name: "",
};

//extends: 특정 인터페이스를 상속받아 인터페이스를 확장할 수 있다.
interface Time {
  hour: number;
  minute: number;
  second: Number;
}
interface DateTime extends Time {
  year: number;
  month: number;
  day: number;
}
interface TimeFormat extends Pick<Time, "hour" | "minute"> {
  //이런 식으로 pick도 가능
  ampm: "am" | "pm";
}
