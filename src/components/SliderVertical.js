import React from 'react'
import'./SliderVertical.css'
import  styled from 'styled-components'

function SliderVertical() {
    return (
        <div className="slider" style={{position:"relative"}}>

            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a>
       
            <div className="slides">
                <Grow>
                <div id="slide-1">
                1
                </div>
                </Grow>
                <Grow>
                <div id="slide-2">
                2
                </div>
                </Grow>
                <Grow>
                <div id="slide-3">
                3
                </div>
                </Grow>
                <Grow>
                <div id="slide-4">
                4
                </div>
                </Grow>
                <Grow>
                <div id="slide-5">
                5
                </div>
                </Grow>
            </div>

        </div>
    )
}

export default SliderVertical


const Grow = styled.div`
    background-color: blue;
    cursor:pointer;
    :hover{
        transform: scale(1.1)
    }
`