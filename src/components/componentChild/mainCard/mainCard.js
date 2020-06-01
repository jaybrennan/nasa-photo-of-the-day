import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import Header from '../header/header'
import "../header/headerStyles.css"



function MainCard(props) {

    const MainCardDiv = styled.div`
    min-height: calc(100vh - 12rem);
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: black;
    padding-top: 1rem;
    padding-bottom: 4rem;
    -webkit-clip-path: polygon(0 0, 2rem 0, 100% 96%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);

    
  
    border-color: transparent transparent #007bff transparent;
    `

    const MainCardInner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-height: 30vh;
    border: 1px solid white;
    border-radius: .35rem;

    img {
        max-width: 100%;
        border-radius: .35rem;
        margin: 2rem;
        margin-bottom: 0;
    }
    

    `

    const Button = styled.button`
    
    border: 3px solid red;

    `
    const Explanation = styled.p`
  
    border: 3px solid black;
    
    `
    const Excerpt = styled.div`

    background-color: slate-grey;
    display: inline-block;
    color: white;
    padding: 2rem;

    `

    const Exp = styled.p`
    
    text-align: justify;
    
    `




    return (
        <>
        <MainCardDiv photo = {props.photo}>
        
        <MainCardInner photo = {props.photo}>

            <img src= {props.photo} />

            <Excerpt>
            
            <span><strong>Title:</strong> {props.title}</span>
            <br/><br/>
            <Exp><strong>Explanation:</strong> {props.explanation}</Exp>


            </Excerpt>

        </MainCardInner>

        


        </MainCardDiv>
        </>

    )

}

export default MainCard