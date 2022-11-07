export default function Editor({
  $target,
  initialState = {
    title: "",
    content: "",
  },
  onEditing,
}) {
  let isInitialized = false;
  const $editor = document.createElement("div");

  $editor.classList.add("editor");

  $target.appendChild($editor);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $editor.querySelector("[name=title]").value = this.state.title;
    $editor.querySelector("[name=content]").value = this.state.content;

    this.render();
  };

  this.render = () => {
    if (!isInitialized) {
      $editor.innerHTML = `
        <input type="text" name="title" value="${this.state.title}" style="width:20rem" />
        <textarea name="content" style="display:block; width:20rem; height:10rem">${this.state.content}</textarea>
      `;

      isInitialized = true;
    }
  };

  this.render();

  $editor.addEventListener("keyup", (e) => {
    const { target } = e;
    const nameValue = target.getAttribute("name");

    if (this.state[nameValue] !== undefined) {
      const nextState = {
        ...this.state,
        [nameValue]: target.value,
      };

      this.setState(nextState);
      onEditing(this.state);
    }
  });
}
