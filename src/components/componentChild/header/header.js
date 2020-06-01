import React, {useState, useEffect} from "react";
import styled from 'styled-components'


function Header(props) {

    const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    
    ` //end HeaderDiv

    const HeaderInner = styled.div`
    max-width: 60vw;
    height: 6rem;
    display: flex;

    ` //end HeaderInner

    const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;

    img {
        max-width: 100%;
    }
    
    ` //end HeaderLeft

    const HeaderCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%
    
    ` //end HeaderCenter



    const HeaderRight = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%

    ` //end HeaderRight

    const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    ` //end HeaderTitle

    const Date = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 2rem;
    color: white;
    padding: .5rem;
    font-size: 1rem;

    `

  

    return (
        

        <HeaderDiv>
            
            <HeaderInner> 

                <HeaderLeft>

                    <img src = "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" />

                </HeaderLeft>
                
                <img src="" />

                <HeaderCenter>

                    <HeaderTitle><h1 className="special">Jay's<br/> NASA Photo of the Day</h1></HeaderTitle>
                    
                </HeaderCenter>

                <HeaderRight>

                    <Date>
                        <span>Today's Date</span>
                        <span>{props.date}</span>

                    </Date>
                    
                </HeaderRight>

              

            </HeaderInner>
    
        </HeaderDiv>
        
    )
}

export default Header