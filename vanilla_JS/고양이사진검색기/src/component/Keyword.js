export default function Keyword({ $target, initialState, onKeywordInput }) {
  let timer;
  const $keyword = document.createElement("input");

  $keyword.className = "Keyword";

  $target.appendChild($keyword);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $keyword.value = this.state.value;
  };

  $keyword.addEventListener("keyup", (e) => {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(async () => {
      onKeywordInput(e.target.value);
    }, 500);
  });
}
