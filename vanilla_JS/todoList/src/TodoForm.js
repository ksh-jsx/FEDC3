function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement('form');
  let isInit = false;

  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
    <input type="text" name="todo" autoComplete="off"/>
    <button>Add</button>
    `;
    if (!isInit) {
      $form.addEventListener('submit', (e) => {
        e.preventDefault();

        const $input = $form.querySelector('input[name=todo]');
        const text = $input.value;

        if (text.length > 1) {
          $input.value = '';
          onSubmit(text);
        }
      });
      isInit = true;
    }
  };

  this.render();
}
