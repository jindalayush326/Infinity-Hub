import axios from 'axios'
import {useEffect, useState} from 'react'
import Content from '../components/Content';
import CustomPagination from '../components/CustomPagination';
import './Trending.css'

const Trending = () => {
  const[page,setPage]= useState(1)
  const [content,setContent] = useState([])
  const fetchTrending = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=bb1123a7680351c6abe8b8a66da2681a&page=${page}`)
//  console.log(data.results);
 setContent(data.results);
  };
  useEffect(()=>{
    window.scroll(0,0);
fetchTrending();
  },[page])
  return (
    <div>
      <div className="pageTitle">Trending</div>
      <div className="trending"> 
      {
        content && content.map((c)=>(
       <Content key={c.id} id={c.id}  poster={c.poster_path}
       title={c.title || c.name}
       date={c.first_air_date || c.release_date}
       media_type={c.media_type}
       vote_average={c.vote_average} />
        ))
      }
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending
