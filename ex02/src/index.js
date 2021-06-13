import _ from "lodash";

setTimeout(() => {
  require("./style.css");
}, 5000);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello World", "webpack 5"], " ");
  element.classList.add("hello");
  element.classList.add("hello-bg");

  return element;
}

document.body.appendChild(component());
