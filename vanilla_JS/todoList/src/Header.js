export default function Header({ $target, text }) {
  const $header = document.createElement("h1");
  $header.textContent = text;
  $target.appendChild($header);
}
