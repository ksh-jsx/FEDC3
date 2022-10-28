function outterFunction() {
  const name = "roto";

  return function () {
    console.log(name);
  };
}

const printName = outterFunction();
printName();

/*
실행결과: roto
outterFunction 실행 후 name 변수는 소멸해야하나 console.log(name)이 잘 작동함.
이렇게 만들어진 것을 클로져라고 한다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이라고도 한다. 
*/
