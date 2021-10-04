import React from 'react';
import {Navbar,Container,Nav,Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
                <Stack direction="horizontal" gap={3}>
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
                     <NavLink to="/Service"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        >
                        Service
                     </NavLink>
                </Stack>
            </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;