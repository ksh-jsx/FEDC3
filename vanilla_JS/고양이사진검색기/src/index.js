import App from "./App.js";

const $target = document.querySelector(".App");

new App({ $target });

//이렇게 선언과 실행이 분리되어있어야 나중에 유닉테스트 같은 것을 할때 유리하고 교체하기도 편함
