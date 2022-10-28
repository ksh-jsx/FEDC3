const $main = document.querySelector("#app");

//명령형 방식으로 하기
const $button1 = document.createElement("button");
$button1.textContent = "버튼1";
$button1.className = "button1";

const $button2 = document.createElement("button");
$button2.textContent = "버튼2";
$button1.className = "button2";

const $button3 = document.createElement("button");
$button3.textContent = "버튼3";
$button1.className = "button3";

let buttonClickCount = 0;

$main.appendChild($button1);
$main.appendChild($button2);
$main.appendChild($button3);

$main.appendChild(document.createElement("hr"));

const toggleButton = ($button) => {
  if ($button.style.textDecoration === "") {
    $button.style.textDecoration = "line-through";
  } else {
    $button.style.textDecoration = "";
  }
  $button.textContent = `버튼 클릭 횟수: ${++buttonClickCount}`;
};

document.querySelectorAll("button").forEach(($button) => {
  $button.addEventListener("click", (e) => {
    toggleButton(e.target);
  });
});

/* -------------------------------------------------------------------------- */

//추상화 하여 사용하기
function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement("button");

  $target.appendChild($button);

  this.state = {
    clickCount: 0,
    toggled: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $button.textContent = text;
    $button.style.textDecoration = this.state.toggled ? "line-through" : "none";
  };

  $button.addEventListener("click", () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    if (onClick) {
      onClick(this.state.clickCount);
    }
  });

  this.render();
}

function TimerButton({ $target, text, timer = 3000 }) {
  const button = new ToggleButton({
    $target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

const button1 = new ToggleButton({
  $target: $main,
  text: "Button4",
  onClick: (clickCount) => {
    if (clickCount % 3 === 0) {
      alert("3번째 클릭");
    }
  },
});

const button2 = new ToggleButton({
  $target: $main,
  text: "Button5",
  onClick: (clickCount) => {
    if (clickCount % 2 === 0) {
      alert("2번째 클릭");
    }
  },
});

const button3 = new ToggleButton({
  $target: $main,
  text: "Button6",
});

$main.appendChild(document.createElement("br"));

new TimerButton({
  $target: $main,
  text: "3초 뒤 자동",
});

new TimerButton({
  $target: $main,
  text: "5초 뒤 자동",
  timer: 1000 * 5,
});
