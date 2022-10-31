export class TodoListSection {
  constructor({ $app, initialState }) {
    this.state = initialState;

    this.$target = document.createElement("section");
    this.$target.className = "section";

    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const tdl = this.state
      .map((tdl, i) => {
        return `
        <li class="tdl">
          <div class="tdl_header">
            <div class="tdl_checkBox">
              <input type="checkbox"/>
            </div>
            <div class="tdl_fold_zone">  
              <div class="tdl_title">${tdl.title}</div>  
              <div class="tdl_dDay"> 10일 남음 </div>
              <div class="tdl_fold_arrow"> ▼ </div>
            </div>
          </div>
        </li>
      `;
      })
      .join("");

    this.$target.innerHTML = `<ul>${tdl}</ui>`;
  }
}
