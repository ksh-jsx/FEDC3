export default function debounce(fn, delay) {
  let timer = null;
  return function () {
    const Context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(Context, args);
    }, delay);
  };
}
