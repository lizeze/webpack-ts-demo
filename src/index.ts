import "./index.css";
import img from "./index.png"

let el: HTMLDivElement = document.createElement("div");
el.classList.add("hello");
el.innerHTML = "webpack and ts";
document.body.append(el);
let image: HTMLImageElement = document.createElement("img");
image.src = img;
document.body.append(image);

// import Person from "./Person";
// let person = new Person()
// person.sayHi(undefined);