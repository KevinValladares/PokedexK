import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ContainerItemListado,ContainerListaListado } from '../Components/Style'



const Lista = () => {


  
  useEffect(() => {
    ListadoPokemon();
  }, []);


  const [pokemones, setPokemones] = useState([])
  const ListadoPokemon = async (e) => {

    try {

      const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=150')
      const users = await respuesta.data

      setPokemones(users.results)
      //console.log(users.results);

    } catch (error) {

      console.log(error);
    }


  }

  return (
    <ContainerListaListado>

      
        {
          pokemones.map((item) =>

            <ContainerItemListado>

              <li key={item.name}>
                {item.name}

              </li>

            </ContainerItemListado>

          )
        }

  


    </ContainerListaListado>
  )
}

export default Lista