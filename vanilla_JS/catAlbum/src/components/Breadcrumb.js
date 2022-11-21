export default function Breadcrumb({ $target, initialState, onClick }) {
  this.state = initialState;

  this.$breadcrumb = document.createElement("nav");
  this.$breadcrumb.className = "Breadcrumb";

  $target.appendChild(this.$breadcrumb);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    //prettier-ignore
    this.$breadcrumb.innerHTML = `
      <div class='Breadcrumb-item'>root</div>${this.state.map(({id,name}) => `
        <div class='Breadcrumb-item' data-id='${id}'>${name}</div>
      `).join('')}
    `
  };

  this.$breadcrumb.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const navItem = e.target.closest(".Breadcrumb-item");

    if (navItem) {
      const { id } = navItem.dataset;

      onClick(id || null);
    }
  });
}
