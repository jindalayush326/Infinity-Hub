import axios from 'axios'
import React, { useEffect } from 'react'


const Genres = ({
    selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
    const handleOn =(genre)=>{
      setSelectedGenres([...selectedGenres,genre]);
      setGenres(genres.filter((g)=>g.id!==genre.id));
      setPage(1);
    }
    const handleOf = (genre)=>{
      setSelectedGenres(
        selectedGenres.filter((selected)=>selected.id!== genre.id)
      );
      setGenres([...genres,genre]);
      setPage(1);
    }


    const fetchGenres = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=bb1123a7680351c6abe8b8a66da2681a&language=en-US`
        );
        setGenres(data.genres);
    };
    useEffect(()=>{
     fetchGenres();
     return ()=>{
        setGenres({});
     }
    },[])
  return (
    <div style={{padding: "6px 0"}}>
       {selectedGenres.map((genre)=>(
        <span class="badge rounded-pill text-bg-primary"
        key={genre.id} 
        label = {genre.name} 
         color='primary'
         onDelete={()=>handleOf(genre)} 
        >
        {genre.name}
         </span>
      ))} 
       {genres.map((genre)=>(
      <span class="badge rounded-pill text-bg-primary"
       key={genre.id}
        onClick={()=>{handleOn(genre)}} 
        color='info'
        >{genre.name}
        </span> 
       )) }
  
    Infinity
    </div>
  )
}

export default Genres
