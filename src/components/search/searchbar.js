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
    margin-right: 1vw;
    border: none;
    border-bottom: 2px solid grey;
    border-radius: 3px;
    font-family: 'Open Sans', san serif;
    font-weight: 300;
    outline: none;
}
>span{
    display: none;
    font-family: 'Open Sans', sans serif;
    font-weight: 400;
    color: red;
    
}

`

const Searchbar = React.forwardRef(({onChange, disabled, onClick }, ref) => {
    return(
        <Form>
            <input type='search' 
            placeholder='enter the max amount of calories for recipe'
            onChange={ (e) => onChange(e) } 
            />
            <button
            disabled={ disabled }
            onClick={(e) => onClick(e) }
            >Search</button>
            <span ref={ ref }>Invalid entry <br /> Please enter a number</span>
        </Form>

        
    )
})

export default Searchbar


