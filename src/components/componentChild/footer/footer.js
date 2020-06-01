import React, {useState, useEffect} from "react";
import styled from 'styled-components'


function Footer(props) {

    const FooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b3d91;
    min-height: 3rem;
    display: flex;
 
    
    ` //end FooterDiv

    const FooterInner = styled.div`
    max-width: 1200px;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ` //end FooterInner

 

    const FooterCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    

 

    ` //end HeaderRight

    const FooterTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    ` //end FooterTitle

    return (
        

        <FooterDiv>
            
            <FooterInner> 


                <FooterCenter>

                    <p>Jay Brennan - 2020 - Lambda School</p>
                    
                </FooterCenter>

     

          
              

            </FooterInner>
    
        </FooterDiv>
        
    )
}

export default Footer