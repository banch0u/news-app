import Home from "./pages/home";

function routeItem(id, title, path, component) {
  return {
    id,
    title,
    path,
    component,
  };
};
const routes = {
  home: routeItem(1, 'home', "/", Home),

};

const routesArr = Object.values(routes);

export { routes, routesArr };
