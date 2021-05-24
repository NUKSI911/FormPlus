import NotFound from "../pages/NotFound/NotFound";
import Template from "../pages/Template/Template";

const routes = [
  {
    path: "/",
    exact: true,
    component: Template,
  },
  {
      path:"/*",
      exact:true,
      component:NotFound
  }
];
export default routes;
