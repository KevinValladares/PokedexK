import React, { useState, useEffect } from 'react'
import { FormBuscar, InputBuscador, Container, 
ContenedorListado, SeccionListado, ContenedorListadoLeft } from '../Components/Style'
import axios from 'axios'


const Buscar = () => {

  const [pokemon, setPokemon] = useState('')
  const [pokemontype, setPokemonType] = useState("");
  const [listaPokemon, setListaPokemon] = useState([])
  const [habilPokemon, setHabilityPokemon] = useState([])
  const [imgpokemon, setImgPokemon] = useState('')


  const ListarPokemones = async (e) => {

    try {
      e.preventDefault()
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLocaleLowerCase()}`)
      const users = await respuesta.data

      const array = [];
      setListaPokemon(users)
      setPokemonType(users.types[0].type.name)
      setImgPokemon(users.sprites.other.home.front_default)
      setHabilityPokemon(users.abilities.map((ability) => ability.ability.name))
      //setHabilityPokemon(users.abilities.map((ability) => ability.ability.name).join(', ').toUpperCase())

      //users.sprites.front_default
    } catch (error) {

      console.log(error);

    }



  }



  const handleSearch = (e) => {
    setPokemon(e.target.value);
  };

  return (

    <div>

      <FormBuscar onSubmit={ListarPokemones}>
        <InputBuscador placeholder="Buscar Pokemon" type="text" onChange={handleSearch} spellCheck="false"></InputBuscador>
      </FormBuscar>


      <ContenedorListado>
        <SeccionListado>
          <Container>
            <h1> Nombre: {listaPokemon.name}</h1>
            <h3> Tipo:  {pokemontype}</h3>

          </Container>

          <ContenedorListadoLeft>
            <h3> Habilidad:</h3>
            {
              habilPokemon.map(

                (abilities) => <li key={abilities}>{abilities},</li>

              )
            }

          </ContenedorListadoLeft>

          <Container>
          <img src={imgpokemon} width="150" height="150"></img>
          </Container>
         
        </SeccionListado>
      </ContenedorListado>


    </div>





  )
}

export default Buscar