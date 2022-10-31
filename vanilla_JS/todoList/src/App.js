function App({ $target, initialState }) {
  new Header({
    $target,
    text: 'Simple Todo List',
  });

  new TodoForm({
    $target: $app,
    onSubmit: (text) => {
      const nextState = [
        ...todoList.state,
        {
          text,
        },
      ];
      todoList.setState(nextState);
    },
  });

  const todoList = new TodoList({
    $target: $app,
    initialState: initialState,
  });
}
