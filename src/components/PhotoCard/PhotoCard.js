import React from "react";
import Header from "./components/Header/Header"
import Photo from "./components/Photo/Photo"
import PhotoDescription from "./components/PhotoDescription/PhotoDescription"
import Footer from "./components/Footer/Footer"
import "./photoCard.css"

function PhotoCard(props) {
  
    return (

        <>

        <Header title = {props.title}/>

        <div className ="photoCard">

            <Photo photo = {props.photo}/>

            <PhotoDescription title = {props.title} date = {props.date} explanation = {props.explanation}/>




        </div>



        <Footer />
        </>

    );
  }



export default PhotoCard;
