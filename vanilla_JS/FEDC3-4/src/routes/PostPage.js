export default function PostPage({ $target, initialState }) {
  if (!new.target) {
    throw new Error("App 컴포넌트에 new 생성자가 필요합니다.");
  }

  this.state = initialState;

  this.$div = document.createElement("div");
  this.$div.className = "PostPage";

  $target.appendChild(this.$div);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$div.innerHTML = `
      <div class="temp">hello world!</div>
    `;
  };
}
