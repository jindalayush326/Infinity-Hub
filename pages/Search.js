import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import Content from "../components/Content";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();

  const fetchSearch = async () => { 
    try{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=bb1123a7680351c6abe8b8a66da2681a&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    // setContent(data.hits);

  }catch(error){
    console.error(error);
  }
};
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type,page]);

  return (
    <div>
      <div className="pageTitle">Search</div>
      <form className="d-flex" role="searchText">
        <input
          className="form-control me-2"
          type="search"
          placeholder="search"
          aria-label="searchText"
          onChange={(e) =>setSearchText(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit" onClick={fetchSearch}>
          <BiSearchAlt2 />
        </button>
      </form>

      <div className="my-3"
     >
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"
        value={type}
         onChange={(event, newValue) => {
          setType(newValue);
        }}
        
         >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="submit"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              label="Search Movies"
              value={type}
              onChange={(event, newValue) => {
                setType(newValue);
              }}
            >
              Search Movies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              label="Search TV Series"
              value={type}
              onChange={(event, newValue) => {
                setType(newValue);
              }}
            >
              Search Series
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
            label="Search Movies"
          ></div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
           label="Search TV Series"
          ></div>
        </div>
      </div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {searchText &&
        !content &&
        (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
    </div>
  );
};

export default Search;
