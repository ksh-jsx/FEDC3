import ProductOptions from "./ProductOptions.js";

const dummyData = [
  {
    optionId: 1,
    optionName: "더미 데이터다!",
    optionPrice: 10000,
    stock: 0,
  },
  {
    optionId: 2,
    optionName: "더미 데이터다!2",
    optionPrice: 12345,
    stock: 20,
  },
  {
    optionId: 3,
    optionName: "더미 데이터다!3",
    optionPrice: 33333,
    stock: 30,
  },
];

const $target = document.querySelector("#app");

new ProductOptions({
  $target,
  initialState: dummyData,
  onSelect: (option) => {
    alert(option.optionName);
  },
});
