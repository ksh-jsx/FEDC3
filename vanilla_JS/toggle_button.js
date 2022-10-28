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

//추상화 하여 사용하기
function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement("button");
  let buttonClickCount = 0;

  $target.appendChild($button);

  this.render = () => {
    $button.textContent = text;
  };

  $button.addEventListener("click", () => {
    buttonClickCount++;
    if ($button.style.textDecoration === "") {
      $button.style.textDecoration = "line-through";
    } else {
      $button.style.textDecoration = "";
    }

    if (onClick) {
      onClick(buttonClickCount);
    }
  });

  this.render();
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
