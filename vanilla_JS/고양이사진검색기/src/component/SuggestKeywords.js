export default function SuggestKeywords({ $target, initialState, onKeywordSelect }) {
  const $suggest = document.createElement("ul");

  $suggest.className = "Keywords";
  $suggest.style.padding = "0";
  $suggest.style.marginTop = "5px";

  $target.appendChild($suggest);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { keywords, cursor } = this.state;
    //prettier-ignore
    $suggest.innerHTML = `
      ${keywords.map((keyword,i) => `
        <li class="${cursor === i ?"active" :  ""}">${keyword}</li>
      `).join('')}
    `;

    $suggest.style.display = keywords.length > 0 ? "block" : "none";
  };

  $suggest.addEventListener("click", (e) => {
    const $li = e.target.closest("li");

    if ($li) {
      onKeywordSelect($li.textContent);
    }
  });

  window.addEventListener("keydown", (e) => {
    if ($suggest.style.display !== "none") {
      const { cursor } = this.state;
      const lastIndex = this.state.keywords.length - 1;
      let nextIndex = cursor;

      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        if (e.key === "ArrowUp") {
          nextIndex = cursor === 0 ? lastIndex : nextIndex - 1;
        } else if (e.key === "ArrowDown") {
          nextIndex = cursor === lastIndex ? 0 : nextIndex + 1;
        }

        this.setState({
          ...this.state,
          cursor: nextIndex,
        });
        return;
      }
      if (e.key === "Enter") {
        onKeywordSelect(this.state.keywords[this.state.cursor]);
      }
    }
  });
}
