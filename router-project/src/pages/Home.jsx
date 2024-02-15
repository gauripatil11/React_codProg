import React from "react";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "marvel";

  try {
    const newUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(newUrl);
    return { response, searchTerm, isError: false,errormsg:'' };
  } catch (error) {
    const errormsg = error?.response.data.Error;
    return { response:null,searchTerm, isError: true ,errormsg};
  }
}

function Home() {
  const { searchTerm } = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <MovieList />
    </div>
  );
}

export default Home;
