export class Navbar {
  $target = null;

  constructor($target) {
    this.$target = $target;

    this.nav = document.createElement("nav");
    this.nav.className = "navbar";

    this.icon = document.createElement("i");
    this.icon.className = "navbar-logo fa fa-leaf";
    this.nav.appendChild(this.icon);

    this.title = document.createElement("span");
    this.title.innerText = "Habit Tracker";
    this.nav.appendChild(this.title);

    this.count = document.createElement("span");
    this.count.className = "navbar-count";
    this.count.innerText = "0";
    this.nav.appendChild(this.count);

    $target.appendChild(this.nav);
  }
}
