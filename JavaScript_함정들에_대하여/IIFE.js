(function Cat(name) {
  console.log(`hello ${name}`);
})("roto");

/*
결과: hello roto
이런식으로 함수로 감싸고 여기에 변수나 함수를 선언하면 window를 침범하지 않는다.
*/

const logger = (function () {
  let logCount = 0;
  function log(message) {
    console.log(message);
  }
  function getLogCount() {
    return logCount;
  }
  return {
    log: log,
    getLogCount: getLogCount,
  };
})();

logger.log("hello!"); //hello!
console.log(logger.getLogCount()); //0
console.log(logger.logCount); //undefined

/*
이렇게 응용할 수 있는데, logCount는 밖에서 접근할 수 없는 변수로 
일종의 private 효과를 내는 코드를 작성할 수 있고, logger만 전역으로 묶이기 때문에 전역오염을 방지할 수 있다.
*/
