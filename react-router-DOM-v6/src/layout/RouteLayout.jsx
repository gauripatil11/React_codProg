import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function RouteLayout() {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              // className={(obj) => {
              //   return obj.isActive && "activeNav";
              // }}
              className={({isActive})=>{
                return isActive?'activeNav' : ''
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default RouteLayout;
