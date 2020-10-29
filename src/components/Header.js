import React from 'react'
import 'materialize-css';
import { Navbar, Icon, NavItem} from 'react-materialize';

function Header() {

  return (
    <>
      <Navbar
        alignLinks="center"
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      > 
        <NavItem href="">Inicio</NavItem>
        <NavItem href="">Sobre Mí</NavItem>
        <NavItem href="">Skills</NavItem>
        <NavItem href="">PortFolio</NavItem>
        <NavItem href="">Contacto</NavItem>
      </Navbar>
    </>
  )
}


export default Header
