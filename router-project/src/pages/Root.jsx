import React from "react";
import { Link, Outlet ,useNavigation} from "react-router-dom";

function Root() {
  const {state} = useNavigation();
  
  return (
    <>
      <Link to="/">Movie Search</Link>
      {state==='idle'?<Outlet />:<h1>loading...</h1>}
    </>
  );
}

export default Root;
