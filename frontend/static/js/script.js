import home from "./views/Home.js";
import about from "./views/About.js";

console.log("this is mój js");

//this function saves url to history when its called
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//this method contains paths > check if location.pathname is one of this paths
//if yes => let match exist if no => go to route[0]
const router = async () => {
  const routes = [
    { path: "/", view: home },
    { path: "/about", view: about },
    { path: "/contact", view: () => console.log("to jest dla contact") },
    { path: "/posts", view: () => console.log("to jest dla postów") },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potencialMatch) => potencialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  //instance of view
  const view = new match.route.view();
  console.log(view, "a to tu to jest nasz view ze scirpta.jssa");

  //console.log(view, 'to jest view');
  //console.log(potentialMatches);
  //console.log(match, 'to jest match');
  //console.log(match.route.view());

  document.querySelector("#spaApp").innerHTML = await view.getHTML();
};

//window - supported by all browsers, it represents browser window
//+DLACZEGO TU JEST ROUTER A NIE ROUTER()+
//popstate event - kiedy zmienia się historia windowsa (browsera) wowołaj router
window.addEventListener("popstate", router);

//once page(DOMContentLoaded) will be loaded => call this function ()=>
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    //if we click
    if (e.target.matches("[data-link]")) {
      //and target of our click matchs[data-link]
      e.preventDefault(); //don't make default refresh
      navigateTo(e.target.href); //execute function, which literraly save href to history and execute route method
      console.log("test clickniecia");
    }
  });
  router();
});
