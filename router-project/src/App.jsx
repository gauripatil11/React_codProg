
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import Root from './pages/Root'
import SingleMovieDetail from './pages/SingleMovieDetail'
import { loader as movieLoader } from "./pages/Home";
import { loader as singlemovieLoader } from "./pages/SingleMovieDetail";
function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>} loader={movieLoader}/>
        <Route path="/detail/:omdbID" element={<SingleMovieDetail/>} loader={singlemovieLoader}/>
      </Route>
    )
  );

  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
