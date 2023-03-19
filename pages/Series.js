import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import Content from '../components/Content';
import CustomPagination from '../components/CustomPagination';
import Genres from '../components/Genres';
import useGenre from '../components/useGenre';


const Series = () => {
    const[page,setPage] = useState(1);
    const[content,setContent] = useState([]);
    // const[numOfPages,setNumOfPages] = useState();
    const[selectedGenres,setSelectedGenres] = useState([]);
    const[genres,setGenres] = useState([]);
    const genreforurl =useGenre(selectedGenres);

    const fetchSeries = async()=>{
      const {data} =  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=bb1123a7680351c6abe8b8a66da2681a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforurl}`);
     setContent(data.results);
    //  setNumOfPages(data.total_pages);
     };
     useEffect(()=>{
      window.scroll(0,0);
     fetchSeries();
    },[genreforurl,page])
  

  return (
    <div>
            <div className="pageTitle">TV Series</div>
            <Genres
type="tv"
selectedGenres = {selectedGenres}
setSelectedGenres = {setSelectedGenres}
genres = {genres}
setGenres = {setGenres}
// page = {page}
// setPage={setPage}
 
/>
<div className="trending"> 
      {
        content && content.map((c)=>(
       <Content key={c.id} id={c.id}  poster={c.poster_path}
       title={c.title || c.name}
       date={c.first_air_date || c.release_date}
       media_type="tv"
       vote_average={c.vote_average} />
        ))
      }
      </div>
      <CustomPagination />


    </div>
  )
}

export default Series
