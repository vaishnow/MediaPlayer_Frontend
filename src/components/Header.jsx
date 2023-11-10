import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-body-tertiary bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:'none', color:'#cccccc'}}>
            <i class="fa-solid fa-circle-play text-warning me-2"></i> 
            Medhu Player
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
