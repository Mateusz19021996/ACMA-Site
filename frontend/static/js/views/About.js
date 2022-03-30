import abstractView from "./AbstractView.js";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Page name is ABOUT");
    this.setPath("/static/html/about.html");
  }
}
