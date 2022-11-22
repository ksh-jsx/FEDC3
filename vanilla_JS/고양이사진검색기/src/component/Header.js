import Keyword from "./Keyword";

export default function header({ $target, initialState, onKeywordInput, onEnter }) {
  const $header = document.createElement("header");
  $header.className = "Header";

  $target.appendChild($header);

  const $title = document.createElement("h1");
  $title.className = "header-title";
  $title.innerHTML = "고양이 사진 검색기";
  $title.style.textAlign = "center";

  $header.appendChild($title);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    keyword.setState({ value: this.state.keyword });
  };

  const keyword = new Keyword({
    $target: $header,
    initialState: { value: this.state.keyword },
    onKeywordInput,
    onEnter,
  });
}
