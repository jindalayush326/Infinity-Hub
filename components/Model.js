import axios from "axios";
import React, { useEffect, useState } from "react";
import {img_500, unavailable } from "../config";
import { BsYoutube } from "react-icons/bs";

import "./Content.css";

const Model = ({ children, media_type, id }) => {
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=bb1123a7680351c6abe8b8a66da2681a&language=en-US`
    );
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=bb1123a7680351c6abe8b8a66da2681a&language=en-US`
    );
    console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  },[]);

  return (
    <>
    <div className="media" 
    style={{cursor: "pointer"}}   > {children}
      {/* <div type="button"> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
         Know More
        </button>

        {/* <!-- Modal --> */}

       
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
             {content && (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="model-header">
                <span className="modal-title">
                    {content.name || content.title}(
                        {(
                            content.first_air_date ||
                            content.release_date ||
                            "----"
                        ).substring(0,4)}
                    )
                  </span>


                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-about">
                <img
                    className="Model_portrait"
                    src={
                        content.poster_path?`${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                   
                  />
                  
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                   <span className="ContentModal__description">
                    {content.overview}
                  </span>

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button className= "btn btn-danger">
                  <a  target="_blank" href={`https://www.youtube.com/watch?v=${video}`}>
                   <BsYoutube/>  Watch Now!
                  </a>
                  </button>
                </div>
              </div>
            </div>
               )}
          </div>
     
      </div>
    {/* // </div> */}
    </>
  );
};

export default Model;
