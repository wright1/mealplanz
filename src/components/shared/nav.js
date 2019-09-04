import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Div = styled.nav`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
`


const Nav = () => {
    return(
        <Div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/search'}>Search</Link>
            

        </Div>

    )}

export default Nav