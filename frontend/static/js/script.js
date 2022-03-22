import home from "./views/Home.js";
import about from "./views/About.js";

console.log('this is mój js')

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async() => {
    const routes = [
        {path: "/", view: home },
        {path: "/about", view: about},
        {path: "/contact", view: () => console.log("to jest dla contact")},
        {path: "/posts", view: () => console.log("to jest dla postów")}        
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potencialMatch => potencialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    //instance of view
    const view = new match.route.view();
    console.log(view, 'a to tu to jest nasz view ze scirpta.jssa')
    

    //console.log(view, 'to jest view');        
    //console.log(potentialMatches);
    //console.log(match, 'to jest match');
    //console.log(match.route.view());

    document.querySelector('#spaApp').innerHTML = await view.getHTML();
};

//window - supported by all browsers, it represents browser window +DLACZEGO TU JEST ROUTER A NIE ROUTER()+
window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    router();
})