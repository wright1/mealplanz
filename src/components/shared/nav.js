import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Div = styled.nav`
width: 100vw;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
 > a{
    margin-right: 1em;
    text-decoration: none;
    color: #515151;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
}

a:hover{
    color: grey;
    border-bottom: 3px solid grey;
    text-decoration: none;
}
`


const Nav = () => {
    return(
        <Div>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Link to={'/dashboard'}>dashboard</Link>
            <Link to={'/search'}>search</Link>
            

        </Div>

    )}

export default Nav