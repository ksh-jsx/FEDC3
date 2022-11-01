export class TodoCount {
  constructor({ $app, initialState, onClick }) {
    this.state = initialState;
    this.onClick = onClick;

    this.$target = document.createElement("footer");
    this.$target.className = "footer";

    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <div class="filter ${this.state.tabState[0]}" data-id=1>
        전체 
        ${this.state.tabState[0] === "on" ? this.state.res.length : ""}
      </div>
      <div class="filter ${this.state.tabState[1]}" data-id=2>
        완료됨 
        ${this.state.tabState[1] === "on" ? this.state.res.length : ""}
      </div>
      <div class="filter ${this.state.tabState[2]}" data-id=3>
        진행중
        ${this.state.tabState[2] === "on" ? this.state.res.length : ""}
      </div>
      <div class="filter ${this.state.tabState[3]}" data-id=4>
        시간 초과
        ${this.state.tabState[3] === "on" ? this.state.res.length : ""}
      </div>
    `;

    if (this.state.isInit) {
      document.querySelectorAll(".filter").forEach(($div) => {
        $div.addEventListener("click", (e) => {
          const { id } = $div.dataset;

          this.onClick(id);
        });
      });
    }
  }
}
