import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";

export default function App({ $target }) {
  const homePage = new HomePage({ $target });
  const productPage = new ProductPage({ $target, initialState: {} });

  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      homePage.render();
    } else if (pathname.indexOf("/products/") > -1) {
      const [, , productId] = pathname.split("/");

      productPage.setState({
        productId,
      });
    } else {
      $target.innerHTML = "<h1>404 not found!~~</h1>";
    }
  };

  this.init = () => {
    this.route();
  };

  window.addEventListener("click", (e) => {
    if (e.target.className === "link") {
      e.preventDefault();
      const { href } = e.target;

      history.pushState(null, null, href.replace(location.origin, ""));
      this.route();
    }
  });

  window.addEventListener("popstate", () => this.route());

  this.init();
}
