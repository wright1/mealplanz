import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
width: 15vw;
height: 10vh;
border-radius: 5px;
font-family: 'Open Sans', sans-serif;
font-size: 1em;
color: #515151;
background: #EEB2D7;
background: radial-gradient(ellipse at center, #EEB2D7 0%, #f9eaea 50%, #F9EAEA 100%);
border: 0.5px solid #a9a9a9;
outline: none;
`

const Button = ({text, onClick, dataId}) => {
    return(
        <Wrapper
        onClick={ () => onClick()}
        dataId={ dataId }
        >{ text }</Wrapper>
    )
}

export default Button
