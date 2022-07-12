import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import { BarraNav, Logo, NavBarLink, BarraNavInterior, NavbarLinkContainer } from './Components/Style'
import Buscar from './Components/Buscar';
import Lista from './Components/Lista'
import Mostrador from './Components/Mostrador'
import pic from "./Images/logo-Pokemon.png";

function App() {



  return (


    <Router>

      <Logo>
    <img src={pic} width="200" height="80"/>
      </Logo>

      <BarraNav>

        <BarraNavInterior>
          <NavbarLinkContainer>
            <NavBarLink  to="/" >Buscar</NavBarLink>
            <NavBarLink  to="/Mostrador">Mostrador</NavBarLink>
            <NavBarLink  to="/Lista" >Lista</NavBarLink>
           
          </NavbarLinkContainer>
        </BarraNavInterior>



      </BarraNav>






      <Routes>

        <Route exact path="/" element={<Buscar />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/Mostrador" element={<Mostrador />} />


      </Routes>

    </Router >

  );
}

export default App;
