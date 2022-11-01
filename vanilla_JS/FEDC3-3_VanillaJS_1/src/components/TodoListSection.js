export class TodoListSection {
  constructor({ $app, initialState, onFold, onCheck }) {
    this.state = initialState;
    this.onFold = onFold;
    this.onCheck = onCheck;

    this.$target = document.createElement("section");
    this.$target.className = "section";

    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  makeDday = (today, date, isCompleted) => {
    const [mm, dd, yy] = date.split("/");
    const myDate = new Date(yy, mm - 1, dd);
    const misec = myDate - today;
    if (isCompleted) {
      return ["완료됨", "complete"];
    } else if (misec < 0) {
      return ["시간초과", "end"];
    } else {
      let temp = Math.floor(misec / 1000);
      let count = 0;
      const unit = ["초", "분", "시간", "일"];

      while (temp > 24) {
        if (count < 2 && temp > 60) {
          temp = Math.floor(temp / 60);
        } else if ((count = 2)) {
          temp = Math.floor(temp / 24);
        } else {
          return [temp + unit[count] + " 남음", "normal"];
        }
        count++;
        if (count === 3) break;
      }
      return [temp + unit[count] + " 남음", "normal"];
    }
  };

  makePlainDate = (date) => {
    const myDate = new Date(date);

    return `
      ${myDate.getFullYear()}년 
      ${myDate.getMonth() + 1}월 
      ${myDate.getDate()}일 
      ${myDate.getHours()}시 
      ${myDate.getMinutes()}분 `;
  };

  render() {
    const today = new Date();

    const tdl = this.state
      .map((tdl, id) => {
        const dDay_text = this.makeDday(today, tdl.targetDate, tdl.isCompleted);

        return `
        <li class="tdl">
          <header class="tdl_header">
            <div class="tdl_checkBox">
              <input type="checkbox" 
                id="check-${id}" 
                class="tdl_checkBox_input" 
                ${tdl.isCompleted ? "checked" : ""}
              />
              <label for="check-${id}"/>
            </div>
            <div class="tdl_fold_zone" data-id=${id}>  
              <h3 class="tdl_title">${
                tdl.isCompleted ? `<del>${tdl.title}</del>` : tdl.title
              }</h3>  
              <div class="tdl_dDay ${dDay_text[1]}"> ${dDay_text[0]} </div>
              <div class="tdl_fold_arrow">${tdl.isFolded ? "▼" : "▲"}  </div>
            </div>
          </header>
          <article class="tdl_article" style=${tdl.isFolded ? "display:none" : "display:block"}>
            <div class="tdl_modify_btns">
              <button>수정</button>
              <button>삭제</button>
            </div>  
            <div class="tdl_content">${tdl.content}</div>  
            <div class="tdl_dates">
              <div class="createdAt">생성일: ${this.makePlainDate(tdl.createdAt)}</div>
              ${
                tdl.modifiedAt
                  ? `<div class="modifiedAt">수정일: ${this.makePlainDate(tdl.modifiedAt)}</div>`
                  : ""
              }
            </div>  
          </article>
        </li>
      `;
      })
      .join("");

    this.$target.innerHTML = `<ul>${tdl}</ui>`;

    if (!this.state.isInit) {
      document.querySelectorAll(".tdl_fold_zone").forEach(($div) => {
        $div.addEventListener("click", (e) => {
          const { id } = $div.dataset;
          this.onFold(id);
        });
      });

      document.querySelectorAll(".tdl_checkBox_input").forEach(($input) => {
        $input.addEventListener("change", (e) => {
          const id = e.target.id.split("-")[1];
          this.onCheck(id);
        });
      });
    }
  }
}
