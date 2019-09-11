import React from 'react'
import styled from 'styled-components'



const Form = styled.form`
width: 100vw;
height: 10vh;
display:flex;
justify-content: center;
align-items: center;
margin-top: 3vh;
>input{
    width: 25vw;
    height: 8vh;
    background-color: #fff1c3;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 3px;
    font-family: 'Open Sans', san serif;
    font-weight: 300;
    outline: none;
}
>button{
    height: 8vh;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 3px;
    font-family: 'Open Sans', san serif;
    font-weight: 300;
    outline: none;
}

`

const Searchbar = () => {
    return(
        <Form>
            <input type='search' placeholder='enter the max amount of calories for recipe' />
            <button>Search</button>
        </Form>

        
    )
}

export default Searchbar


