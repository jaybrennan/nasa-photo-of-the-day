import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from './componentChild/header/header'
import MainCard from "./componentChild/mainCard/mainCard"
import "../components/photoApp.css"

import Footer from "./componentChild/footer/footer"

function PhotoApp(props) {

    //setup useState

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');

    //fetch data

    axios.get('https://api.nasa.gov/planetary/apod?api_key=RrTNfX4rafzxO6LkuHrKpMDNOrfktHdv0L3N08w9')
    .then(response => {

    // setTitle(response.data.)

    console.log(response.data)

    setTitle(response.data.title);
    setPhoto(response.data.hdurl);
    setDate(response.data.date);
    setExplanation(response.data.explanation);

  })
  .catch(function (error) {
    console.log(error);
  });

    return <div className="mainContainer">

        <Header date = {date} />

        <MainCard photo = {photo} date = {date} explanation = {explanation} title = {title} />

        <Footer />

    </div>
}

export default PhotoApp