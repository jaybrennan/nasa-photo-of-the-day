import React from "react";
import "./photoDescription.css"


function PhotoDescription(props) {
  return (
    <div className="description">
      <p>
        
        <span><h2 className="title">Title: {props.title}</h2></span>
        <span><h2 className="title">Date:{props.date}</h2></span>
      <p>{props.explanation}</p>

      </p>
    </div>
  );
}

export default PhotoDescription;
