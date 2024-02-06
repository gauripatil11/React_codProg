import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isloading,setIsloading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    async function fetchurl() {
        setIsloading(true)
      const response = await fetch(url,{signal:controller.signal});
      const resdata = await response.json();
      setData(resdata);
      setIsloading(false)
    }
    fetchurl();

    return ()=>{
        controller.abort()
    }
  }, [url]);

  return {data,isloading};
}

export default useFetch;
