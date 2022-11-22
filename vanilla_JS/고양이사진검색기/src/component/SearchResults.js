export default function SearchResults({ $target, initialState }) {
  const $searchResult = document.createElement("div");
  $searchResult.className = "SearchResults";

  $target.appendChild($searchResult);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    //prettier-ignore
    $searchResult.innerHTML = `
      ${this.state.map(result =>`
        <div>
          <img src="${result.url}"/>
        </div>
      `).join('')}
    `;
  };
}
