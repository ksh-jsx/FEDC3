function RockBand(members) {
  this.members = members;
  this.perform = function () {
    setTimeout(function () {
      this.members.forEach(function (member) {
        member.perform();
      });
    }, 1000);
  };
}
var theOralCigarettes = new RockBand([
  {
    name: "takuya",
    perform: function () {
      console.log("Sing: a e u i a eui");
    },
  },
]);

theOralCigarettes.perform();

/*
실행결과: Cannot read property 'forEach' of undefined
setTimeOut 인자는 함수를 받을 수 있는데 이 안에서 this는 RockBand의 this를 가르키지않는다. setTimeOut는 자체적인 this를 가지는 것
*/

//해결법 1: arrow func 사용
setTimeout(() => {
  this.members.forEach(function (member) {
    member.perform();
  });
}, 1000);

//해결법 2: 바인딩
setTimeout(
  function () {
    this.members.forEach(function (member) {
      member.perform();
    });
  }.bind(this),
  1000
);
