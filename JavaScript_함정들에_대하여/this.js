const idiots = {
  name: "idiots",
  members: {
    roto: {
      members: "roto",
      play: function () {
        console.log(`band ${this.name} ${this.members} play`);
      },
    },
  },
};

idiots.members.roto.play();

/*
실행결과: band undefined roto .
this가 가르키는 객체가 roto이기 때문이다.
idiots.name을 출력하면 원하는 결과가 나올 것이다.
*/
