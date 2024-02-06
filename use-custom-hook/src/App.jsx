import useFetch from "../hooks/useFetch";

function App() {
  const {data,isloading} = useFetch("https://jsonplaceholder.typicode.com/users");

  if(isloading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <ul>
        {data &&  data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
