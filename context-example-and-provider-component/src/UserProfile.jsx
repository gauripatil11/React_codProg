import React from "react";
import BasicDetails from "./BasicDetails";
import { useAuth } from "./AuthProvider";

function UserProfile() {
  const { auth, setAuth } = useAuth();

  return (
    <div>
      <h1>UserProfile</h1>
      {auth.name ? (
        <BasicDetails />
      ) : (
        <button
          onClick={() => {
            setAuth({
              name: "gauri",
              email: "gauripatil@gmail.com",
            });
          }}
        >
          login
        </button>
      )}
    </div>
  );
}

export default UserProfile;
