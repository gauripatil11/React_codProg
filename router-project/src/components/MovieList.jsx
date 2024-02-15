import React from 'react'
import { useLoaderData , Link } from 'react-router-dom'

function MovieList() {
    const {response,isError,errormsg} = useLoaderData();
    const data = response?.data;
    if(!data.Search){
        return <h1>{data.Error}</h1>
    }
    if(isError){
      return <h1>{errormsg}</h1>
    }
  return (
    <>
    {data.Search && data.Search.map((movie)=>{
        return <p><Link to={`/detail/${movie.imdbID}`}>{movie.Title}</Link></p>
    })}
    </>
  )
}

export default MovieList