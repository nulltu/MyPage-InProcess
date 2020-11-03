import React, { useEffect } from 'react'
import 'materialize-css';
import { Navbar, Icon, NavItem } from 'react-materialize';
import {animateScroll as scroll} from 'react-scroll'

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
          <NavItem onClick={() => scroll.scrollTo(1000)}>Sobre Mí</NavItem>
          <NavItem onClick={() => scroll.scrollTo(2000)}>Skills</NavItem>
          <NavItem onClick={() => scroll.scrollTo(3000)}>PortFolio</NavItem>
          <NavItem href="">Contacto</NavItem>
        </Navbar>
      </>
    )
  }



  export default Header
