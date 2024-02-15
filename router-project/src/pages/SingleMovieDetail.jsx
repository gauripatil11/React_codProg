import { useLoaderData } from "react-router-dom";
import { apiKey } from "../constants";


export async function loader({params}) {

  // const url = new URL(request.url);
  // console.log(url);
  // const searchTerm = url.searchParams.get("search");

  const newUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${params.omdbID}`;

  const response = await fetch(newUrl);
  const data = await response.json();

  return data;
}

function SingleMovieDetail() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
    <p>{data.Title}</p>
    <p>{data.Language}</p>
    </>
  )
}

export default SingleMovieDetail