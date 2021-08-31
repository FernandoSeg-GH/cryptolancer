import React from 'react'
import  styled from 'styled-components'

function Button(props) {
    return (
        <ButtonWrapper>
            More
        </ButtonWrapper>
    )
}

export default Button


const ButtonWrapper = styled.button`
    width: 300px;
    height: 50px;
    background-color: gray;
    color: white;
    opacity: 0.8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-out;
    :hover{
        background-color: orange;
        color: black;
        transition: 0.2s ease-out;
    }
`