function Cat(name, age) {
  this.name = name;
  this.age = age;
}

const tabby = Cat("nana", 7);
console.log(tabby.name);

/*
위의 코드는 에러가 난다. 
return된 것이 없기에 tabby는 undefined이고 undefined.name은 당연히 에러가 나는 것.
 */

//6번째 줄을 const tabby = new Cat("nana", 7); 로 교체하면 this는 새로 생긴 객체를 가리키게 되므로 정상적으로 실행된다.
