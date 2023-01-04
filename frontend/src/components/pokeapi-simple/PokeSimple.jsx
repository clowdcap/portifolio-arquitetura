import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './pokesimple.css'

const PokeSimple = () => {
    const [pesquisa, setPesquisa] = useState('')
    const [poke, setPoke] = useState({})
    
    const inputElement = useRef()
    
    const ver_pokemom = async (id_pokemon_busca) => {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon_busca}`)
        setPoke(pokemon.data)
    }
    
    const focusInput = (event) => {
        event.preventDefault()
        const inputValue = inputElement.current.value
        setPesquisa(inputValue)
    }   
    
    useEffect(()=> {    
        ver_pokemom(pesquisa)
    }, [focusInput])

    return (
        <>
            <h3>Simples aplicacao do</h3>
            <h1>Poke API</h1>
            
            <input type="text" ref={inputElement} />
            <br />
            <button onClick={focusInput}>Focus Input</button>
            <br />
            <br />
            <p>Nome: { poke.name }</p>

            

        </>
    )
}

export default PokeSimple