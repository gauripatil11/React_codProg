import { useAuth } from "./AuthProvider";

function BasicDetails() {
  const { auth, setAuth } = useAuth();
  return (
    <div>
      <h3>name : {auth.name}</h3>
      <h3>email : {auth.email}</h3>
      <button
        onClick={() => {
          setAuth({});
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default BasicDetails;
