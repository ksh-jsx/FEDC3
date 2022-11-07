export default function SideBar({ $target, initialState }) {
  if (!new.target) {
    throw new Error("App 컴포넌트에 new 생성자가 필요합니다.");
  }

  this.state = initialState;

  this.$sideBar = document.createElement("nav");
  this.$sideBar.className = "sideBar";

  $target.appendChild(this.$sideBar);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const $li = this.state
      .map((x, i) => {
        return `<div class ="title">${x}</div>`;
      })
      .join("");

    this.$sideBar.innerHTML = $li;
  };
}
