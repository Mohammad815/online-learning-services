import React from 'react';
import {Navbar,Container,Nav,Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className='na'>
        <Container>
            <Nav className="m-auto ">
                <Stack direction="horizontal" gap={3} className='text-center fs-4 p-3'>
                    <NavLink to="/home"
                        activeStyle={{
                            fontSize:"1.5rem",
                            fontWeight: "bold",
                            color: "tomato"
                            
                        }}
                        >
                        Home
                    </NavLink>
                    <NavLink to="/about"
                        activeStyle={{
                            fontSize:"1.5rem",
                            fontWeight: "bold",
                            color: "tomato"
                        }}
                        >
                        About Us
                     </NavLink>
                     <NavLink to="/service"
                        activeStyle={{
                            fontSize:"1.5rem",
                            fontWeight: "bold",
                            color: "tomato"
                        }}
                        >
                        Service
                     </NavLink>
                     <NavLink to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >
                        Conatact
                     </NavLink>
                </Stack>
            </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;