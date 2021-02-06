import { Navbar } from "./components/navbar.js";

class App {
  $target = null;
  habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];

  constructor($target) {
    this.$target = $target;

    this.nav = new Navbar($target);
  }
}

window.onload = () => {
  new App(document.getElementById("app"));
};
