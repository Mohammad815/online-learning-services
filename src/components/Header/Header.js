import React from 'react';
import {Navbar,Container,Nav,Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className='na'>
        <Container>
            <Nav className="m-auto ">
                <Stack direction="horizontal" gap={3} className='text-center'>
                    <NavLink to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                            
                        }}
                        >
                        Home
                    </NavLink>
                    <NavLink to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >
                        About Us
                     </NavLink>
                     <NavLink to="/service"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
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