import React, {useState, useEffect} from "react";
import Axios from "axios";
import PhotoCard from "./PhotoCard/PhotoCard"

function PhotoApp() {

    //setting up useState
    
        const [photo, setPhoto] = useState();
        const [title, setTitle] = useState();
        const [date, setDate] = useState();
        const [explanation, setExplanation] = useState();
        
    
    //fetching the data
      
        useEffect(() => {
          Axios.get('https://api.nasa.gov/planetary/apod?api_key=RrTNfX4rafzxO6LkuHrKpMDNOrfktHdv0L3N08w9')
           .then(response => {
             console.log(response);
             
             setPhoto(response.data.url);
             setTitle(response.data.title);
             setDate(response.data.date);
             setExplanation(response.data.explanation);
           })
           .catch(error => console.log(error))
        }, []); // [] is the dependancy array
      
        return (
    
          <div className="App">
    
        
            <PhotoCard title = {title} photo = {photo} date = {date} explanation = {explanation}/>
    
          </div>
        );
      }
    
    
    
    export default PhotoApp;
    