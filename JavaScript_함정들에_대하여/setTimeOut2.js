const numbers = [0, 1, 2, 3, 4];

for (var i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log(`[${i}] number ${numbers[i]} turn`);
  }, i * 1000);
}

/*
결과
[5] number undefined turn
[5] number undefined turn
[5] number undefined turn
[5] number undefined turn
[5] number undefined turn

setTimeOut 이후 참조한 i는 이미 for 루프가 끝난 이후의 i이기 때문에 5로 고정되는 것
*/

//해결법1: IIFE
for (var i = 0; i < numbers.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(`[${index}] number ${numbers[index]} turn`);
    }, i * 1000);
  })(i);
}

//해결법2: let 사용: let은 블록 스코프이기 때문에 setTimeOut 내에서 let i가 0,1...일 떄 각각 참조함
for (let i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log(`[${i}] number ${numbers[i]} turn`);
  }, i * 1000);
}

//해결법3: forEach 사용: numbers를 순회하면서 각각 function을 만들기 때문에 i의 값이 고유해짐
numbers.forEach(function (number, i) {
  setTimeout(function () {
    console.log(`[${i}] number ${number} turn`);
  }, i * 1000);
});
