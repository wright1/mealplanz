import React, { useState, useEffect, createRef } from 'react'
import Searchbar from './searchbar'
import validate from '../../utils/validate'
import getAllRecipes from '../../utils/getAllRecipes'


const Search = () => {


    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

    })

    const warningRef = createRef();

    const handleChange = e => {

        let str = e.target.value;
        //warning message appears if str is not a number
        validate(str) ? warningRef.current.style.display='none': warningRef.current.style.display= 'initial'

        setInput(str)
    }



    return(
        <div>
            <Searchbar
            onChange={ handleChange }
            disabled={ !validate(input)}
            ref={ warningRef }
            onClick={ (e) => getAllRecipes(e, input) }
             />
            
        </div>
    )
}

export default Search