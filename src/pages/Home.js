import React from 'react'
import  styled from 'styled-components'
import Hero from '../components/Hero'
import Companies from './Companies';
import Jobs from './Jobs';
import About from './About'

function Home() {
    return (
        <>
        <Main id="home">
            <AppWrapper>
                    <Hero
                        titleSub="Work From Everywhere"
                        titleMain="The Future is Now."
                        titleContent="We encourage decentralization of the economy by connecting Developers with decentralized organizational cultures."
                        sectionSub="Work hard. Inspire your partners."
                        sectionMain1="Brand new products "
                        sectionMain2="with cutting edge technology."
                    />
                    <Jobs/>
                    <Companies/>
                    <About/>
            </AppWrapper>  
        </Main>
        </>
    )
}

export default Home

const Main = styled.div`

    width: 100%;
    height: 100vh;
    @media (max-width: 1024px){
        height: 100%;
    }
    
`;


const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  @media (max-width: 1023px){
        height: 100%;
        scroll-snap-type: none;
  }
`;
