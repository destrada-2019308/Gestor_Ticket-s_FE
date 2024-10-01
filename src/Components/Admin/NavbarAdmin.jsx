import React from 'react'
import styled from 'styled-components'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import BtnLogout from '../UI/BtnLogout'; 

import img2 from '../../assets/logoMacro.png'
import { useLogin } from '../../shared/Login-Register/useLogin';


const StyledImg = styled.img`
  width: 5rem; 
`;

export const NavbarAdmin = () => {


  const {logout} = useLogin()

  const user = localStorage.getItem('user')
  //console.log(user);
  let data = JSON.parse(user)

  return (
    <Navbar collapseOnSelect expand="lg" className=" p-2" style={{ background: '#2f518d', color: '#fff' }}>
 
      <Container>
        <StyledImg src={img2} alt="" />
        <Navbar.Brand href="#" style={{ color: '#fff', fontSize: '' }}> Gestión de datos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: '#fff', fontSize: 'large' }} href="#">Colegios</Nav.Link>
            <Nav.Link style={{ color: '#fff', fontSize: 'large' }} href="#">Carreras</Nav.Link>
            <Nav.Link style={{ color: '#fff', fontSize: 'large' }} href="#">Departamento</Nav.Link>
            <Nav.Link style={{ color: '#fff', fontSize: 'large' }} href="#">Gerencias</Nav.Link>

            <NavDropdown title={<span style={{ color: '#fff', fontSize: 'large' }}>Usuarios</span>} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Supervisor</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Practicante
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            
              <Navbar.Brand style={{ color: '#fff' }}>Bienvenido {data.nameUser} </Navbar.Brand>
              <BtnLogout onClick={logout}/>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  )
}
