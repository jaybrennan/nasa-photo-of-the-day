import React from "react";
import "./photoStyles.css"


function Photo(props) {
    
    return (

    <div className="photoInfo">

        <img class="photoImg" src={props.photo} alt="space"/>

    </div>


    )
}

export default Photo;