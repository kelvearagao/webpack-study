import _ from "lodash";
import msg from "./msg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello World", "webpack 5"], " ");

  //msg();

  return element;
}

document.body.appendChild(component());
