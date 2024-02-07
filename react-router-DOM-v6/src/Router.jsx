import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {Home,About,Contact,Posts,Error} from './pages'
import RouteLayout from "./layout/RouteLayout";
import PostDetails from "./component/PostDetails";

function Router() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="posts/:id" element={<PostDetails/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  );

  return <RouterProvider router={Router}/>;
}

export default Router;
