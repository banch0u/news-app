import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

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
  login: routeItem(2, 'login', "/login", Login),
  register: routeItem(3, 'register', "/register", Register),



};

const routesArr = Object.values(routes);

export { routes, routesArr };
