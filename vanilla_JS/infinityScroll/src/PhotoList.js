export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("ul");
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    //prettier-ignore
    $photoList.innerHTML = `
      <ul>
        ${this.state.map((photo) => {
          return `
            <li>
              <img width="100%" src="${photo.imagePath}"/>
            </li>
          `;
        }).join("")}
      </ul>
      <button class="PhotoList__loadMore">Load More</button>
    `;
  };
  this.render();
}
