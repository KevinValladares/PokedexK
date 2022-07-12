import styled from "styled-components";
import { NavLink, } from 'react-router-dom'

export const Logo = styled.div`
padding: 20px;
display: flex;
justify-content: center;
`

export const BarraNav = styled.div`
margin: 0 auto;
justify-content: center;
height: 50px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const BarraNavInterior = styled.div`
margin: 0 auto;
justify-content: center;
/* background-color: gray; */
/* height: 50px;*/
max-width: 600px;
display: flex;
align-items: center;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  height: 50px;


`


export const NavBarLink = styled(NavLink)`

color: black;
padding: 0 30px;
margin:1px;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
background-color: white;
display: flex;
border: solid 1px #b1b3b5;
align-items: center;
justify-content: center;

&:first-child{
    border-radius: 10px 0 0 0;
}

&:last-child{
    border-radius: 0 10px 0 0;
}


  &:hover {
    box-shadow: inset 0 -4px 0 0 #24218b;

}

`




//------------------------  ESTILOS PARA LA PANTALLA BUSCAR ------------

export const FormBuscar = styled.form`
margin: 15px 0;
display: flex;
justify-content: center;
align-items: center;
`
export const InputBuscador = styled.input`
outline: none;
margin-bottom: 5px;
border: 1px solid #dcdcdc;
border-radius: 15px;
padding: 10px;
width: 300px;
`


export const ContenedorListado = styled.div`
display:flex;
height:100%;
justify-content: center;
align-items: center;
`
export const SeccionListado = styled.section`
background-color: rgb(255,255,255,0.6);
border-top: solid 2px palevioletred;
padding: 20px 25px;
width: 500px;
box-shadow:0px 2px 3px rgb(0,0,0,0.3);
`


export const Container = styled.div`
font-family: Arial, Helvetica, sans-serif;
justify-content: center;
align-items: center;
`


export const ContenedorListadoLeft = styled.div`
display:flex;
justify-content:left;
align-items: left;
list-style: none;


& > h3{
   margin:0; 
   padding:0;
  
}

& > li{
    color: black;
    font-weight: bold;
    font-size:18px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1px 4px;
    margin:0px;
    

}
`

// -------------------- ESTILOS PARA EL COMPONENTE LISTA --------------

export const ContainerListaListado = styled.div`

max-width: 600px;
height: 390px;
margin: 20px auto;
padding: 0 10px;
overflow: auto;

//Incluir para poder mostrar los demas webkit/ controlamos el ancho de la barra para las barras verticales
// height para las horizontales
&::-webkit-scrollbar{
  width: 12px;
  border-radius:5px;
  background-color: #f5f5f5;

}

//barra que movemos 
&::-webkit-scrollbar-thumb{
  height:10px;
  border-radius:5px;
  background-color: #eb1738;
  background-image: -webkit-linear-gradient(90deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent);

}

&::-webkit-scrollbar-thumb:hover{
  background-color: #eb3000;
}

//lugar en que se mueve la barra
&::-webkit-scrollbar-track{
  border-radius:5px;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.4);
  background-color: #f5f5f5;

}


`


export const ContainerItemListado = styled.div`
  background-color: hsl(0deg 100% 99% / 80%);
  font-family: arial;
  border-radius: 10px;
  margin-bottom: 5px;
  list-style: none;
  animation: .5s list;

&> li{

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

}

`

// -------------------- ESTILOS PARA EL COMPONENTE MOSTRADOR --------------

export const SeccionBotonsMostrador = styled.section`
background-color: rgb(255,255,255,0.6);
border-top: solid 2px palevioletred;
padding: 15px;
width: 500px;
box-shadow:0px 2px 3px rgb(0,0,0,0.3);
`

export const ContainerBotones = styled.div`
  display: flex;
  justify-content: space-between;

  
&>a{
  display: flex;
  align-items: center;
  
  //background-color: rgba(78,78,75,0.3);
  border-radius: 15px;
  text-decoration: none;
  //color: #fff;
  align-self: center;

}

`

export const ContainerNombrePokemon = styled.h1`

  text-align: center;
  font-size: 26px;


  &>span{
    color: grey;

  }

`