import abstractView from "./AbstractView.js";

export default class extends abstractView {

    constructor(){
        super();
        this.setTitle("Page name is HOME");
        this.setPath("/static/html/home.html")        
    }    
}