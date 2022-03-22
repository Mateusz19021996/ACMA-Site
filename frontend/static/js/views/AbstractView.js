export default class AbstractView {            

    // constructor(_htmlPath) {
    //     this.htmlPath = _htmlPath;
    //      wtedy identycznie, tylko w klasie niżej trzeba w super(o tu) wpisac path    
    // };

    constructor() {
        
    };

    setTitle(title){
        document.title = title;
    }

    setPath(path){
        this.htmlPath = path;
    }

    async getHTML(){
        const responsee = await fetch(this.htmlPath).then((data) => data.text());
        return responsee;
    }

}