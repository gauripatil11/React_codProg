import React, { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

function FetchingData() {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [error,seterror] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    const controller = new AbortController();
    const signal = controller.signal;

    // async function fetchdata() {
    // const response = await fetch(URL);
    // const data = await response.json();
    // setdata(data);
    // console.log(data);
    //   }
    // fetchdata();
   
    fetch(URL,{signal:signal})
      .then((response) => {
        if(response.ok){
          return response.json()
        }
        else{
          seterror(true)
          setloader(false)
          throw new Error('hlo')
        }
      })
      .then((data) => {
        setdata(data);
      console.log(data);
        setloader(false);
      })

      return ()=>{
        console.log('aborting request...');
        controller.abort();
      }
  }, []);

  if (loader) {
    return <h1>loading...</h1>;
  }
  if(error){
    return <h1>something went wrong...</h1>;
  }

  return (
    <div>
      {data.map((user) => {
        return <User {...user} key={user.id} />;
      })}
    </div>
  );
}

export default FetchingData;
