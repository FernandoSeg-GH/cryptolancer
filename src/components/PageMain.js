import React from 'react'
import  styled from 'styled-components'

function PageMain(props) {
    return (
        <PageMainWrapper>
            <PageMainSub>{props.mainSub1}</PageMainSub>
            <PageMainSub>{props.mainSub2}</PageMainSub>
            <PageMainContent>{props.mainContent}</PageMainContent>
        </PageMainWrapper>
    )
}

export default PageMain



const PageMainWrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        height: 20vh;
  }
    
`;

const PageMainSub = styled.h2`
    font-family: 'NeueMontreal-Regular';
    font-size: 36px;
    line-height: 43.2px;
    color: rgba(0, 0, 0, 0.7);
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        height: 80vh;
  }
`;

const PageMainContent = styled.p`
    font-size: 24px;
    line-height: 28.8px;   
    color: rgba(0, 0, 0, 0.7);
    margin-top: 20px;
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        
  }
    
`;