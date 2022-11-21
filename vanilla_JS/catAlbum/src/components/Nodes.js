export default function Nodes({ $target, initialState, onClick, onPrevClick }) {
  const $nodes = document.createElement("div");
  $target.appendChild($nodes);
  $nodes.classList.add("Nodes");

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;

    //prettier-ignore
    $nodes.innerHTML = `
      ${isRoot ? "": `
        <div class="Node">
          <img src="https://cdn.roto.codes/images/prev.png">
        </div>
      `}
      ${nodes.map((node) => {
        const icon = node.type === "DIRECTORY"
          ? "https://cdn.roto.codes/images/directory.png"
          : "https://cdn.roto.codes/images/file.png";

        return `
          <div class="Node" data-id=${node.id}>
            <img src="${icon}">
            ${node.name}
          </div>
        `}).join('')}
    `;
  };

  this.render();

  $nodes.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const targetNode = e.target.closest(".Node");

    if (targetNode) {
      const { id } = targetNode.dataset;

      if (id) {
        const node = this.state.nodes.find((node) => node.id === id);

        onClick(node);
      } else {
        onPrevClick();
      }
    }
  });
}
