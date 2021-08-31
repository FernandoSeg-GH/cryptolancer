import React from 'react'
import  styled from 'styled-components'
//import JobItem from '../components/JobItem'
import {ReactComponent as BackArrow} from '../assets/right-arrow.svg'
import { Link } from 'react-router-dom'
//import {motion} from 'framer-motion'
//import {ReactComponent as BP} from '../assets/bullet.svg'
import {ReactComponent as Remote} from '../assets/remote.svg'
import JobCard from '../components/JobCard'

function SrFullStack() {
    return (
        <JobDetails>
                    <Link to="/">
                        <Back>
                            <BackArrow style={{height:"15px"}}/>
                        </Back>
                    </Link>
                    
                    <JobItem
                        itemTitleA="Senior Full Stack Developer"
                        itemTitleB="React | NodeJS"
                        jobDuration="Duration: 6 Months (possibility of extension)"
                        jobTimezone="Timezone: EST"
                        />
                                 
                    <JobCard
                        li1="5+ years experience developing full stack professional web solutions."
                        li2="Hands-on experience with React.js and Node.js / Express.js is essential."
                        li3="Experience working with Redux, Typescript, JavaScript and CSS."
                        li4="Solid handling of CSS and CSS frameworks like Bootstrap, Foundation y Sass."
                        li5="Solid knowledge of web development tool and programming languages, and experience working the cloud."
                        li6="Excellent communication skills, both written and oral."
                        li7="Extensive cloud knowledge and experience building and running Azure / AWS infrastructure."
                        li8="Willing to work with many teams, trying new methods and helping others learn new ways."
                    />
                </JobDetails> 
    )
}

export default SrFullStack



const JobDetails = styled.div`
    background-color: white;
   
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;

const Back = styled.button`
    height: 50px;
    width: 50px;
    background-color: orange;
    position: absolute;
    top: 25px;
    right: 2.5%;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    z-index: 10000;
    :hover{
        transform: scale(1.05);
        transition: 0.3s ease-out;
    }

    @media (max-width: 1023px) {
        position: fixed;
        top: 31px;
        right: 20px;
        height: 40px;
        width: 40px;
    }
`;

function JobItem(props) {
    return (
        <JobItemWrapper>
            <JobRemoteWrapper>
                <Remote/>
            </JobRemoteWrapper>
            <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
                <JobItemTitleA>
                        {props.itemTitleA}
                </JobItemTitleA>
                <JobItemTitleB>
                        {props.itemTitleB}
                </JobItemTitleB>
                <JobItemContent>
                        {props.jobStatus}
                </JobItemContent>
                <JobItemContent>
                        {props.jobDuration}
                </JobItemContent>
                <JobItemContent  >
                        {props.jobTimezone}
                </JobItemContent>
            
            </div>
            
        </JobItemWrapper>
    )
}



const JobItemWrapper = styled.div`
    width: 40vw;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 9rem 2%;
    transition: 1s ease-out;
    @media (max-width: 1023px) {
        width: 90%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 60px;
        
    }
`;


const JobRemoteWrapper = styled.div`
    margin-right: 20px;
    

`;

const JobItemTitleA =  styled.h1`
    font-size: 22px;
    
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    @media (max-width: 1023px) {

  }
`;

const JobItemTitleB =  styled.h1`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    @media (max-width: 1023px) {

  }
`;

const JobItemContent = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    @media (max-width: 1023px) {

  }

`;