import abstractView from "./AbstractView.js";

export default class About extends abstractView {

    constructor(){
        super();
        this.setTitle("Page name is ABOUT");
        this.setPath("/static/html/about.html")        
    }    
}