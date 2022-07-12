import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ContenedorListado, SeccionBotonsMostrador, ContainerBotones, 
  ContainerNombrePokemon,ContenedorListadoLeft,Container } from '../Components/Style'
import LeftArrow from "../Images/left-arrow.png";
import RightArrow from "../Images/right-arrow.png";


const Mostrador = () => {

  const [idpokemon, setIdPokemon] = useState(1)

  const [pokemontype, setPokemonType] = useState("");
  const [listaPokemon, setListaPokemon] = useState([])
  const [habilPokemon, setHabilityPokemon] = useState([])
  const [imgpokemon, setImgPokemon] = useState('')


  useEffect(() => {
    InfoPokemon();
  }, [idpokemon]);


  const InfoPokemon = async () => {

    try {

      console.log(idpokemon);
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idpokemon}`)
      const users = await respuesta.data


      setListaPokemon(users)


       setPokemonType(users.types[0].type.name)
       setImgPokemon(users.sprites.other.home.front_default)
       setHabilityPokemon(users.abilities.map((ability) => ability.ability.name))


    } catch (error) {

      console.log(error);

    }



  }

  const AumentarId = () => {

    setIdPokemon(idpokemon + 1)

  }

  const DisminiurId = () => {

  if(idpokemon==1){

    setIdPokemon(1)
  }
  else{
    setIdPokemon(idpokemon - 1)
  }

 

  }


  return (

    <ContenedorListado>
      <SeccionBotonsMostrador>


        <ContainerBotones>
          <a onClick={DisminiurId}  ><img src={LeftArrow} width="15" height="15" /></a>
          <a onClick={AumentarId}  ><img src={RightArrow} width="15" height="15" /></a>
        </ContainerBotones>
        <ContainerNombrePokemon>
          {listaPokemon.name}
          <span> No. {idpokemon} </span>
        </ContainerNombrePokemon>

        <ContenedorListadoLeft>
        <h3> Tipo:  {pokemontype}</h3>
        </ContenedorListadoLeft>
       

        <ContenedorListadoLeft>
            <h3> Habilidad: </h3>
            {
              habilPokemon.map(

                (abilities) => <li key={abilities}>{abilities}</li>

              )
            }

          </ContenedorListadoLeft>
          <Container>
          <img src={imgpokemon} width="150" height="150"></img>
          </Container>

      </SeccionBotonsMostrador>
    </ContenedorListado>




  )
}

export default Mostrador