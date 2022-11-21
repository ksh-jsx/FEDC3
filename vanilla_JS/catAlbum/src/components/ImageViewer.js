export default function ImageViewer({ $target, initialState, onClose }) {
  const $imageViewer = document.createElement("div");
  $imageViewer.className = "ImageViewer Modal";

  this.state = initialState;

  $target.appendChild($imageViewer);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state}">
      </div>
    `;

    $imageViewer.style.display = this.state ? "block" : "none";
  };

  $imageViewer.addEventListener("click", (e) => {
    if (e.target.classList.contains("Modal")) {
      onClose();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  });
}
