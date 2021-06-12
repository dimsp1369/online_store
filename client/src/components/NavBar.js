import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/const";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <NavLink style={{color: 'white', fontsize: '34px'}} to={SHOP_ROUTE}>SuperStore</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Admin</Button>
                        <Button variant={"outline-light"} className="ml-2">Login</Button>
                    </Nav> :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sing up</Button>
                    </Nav>}
            </Navbar>
        </Container>
    );
});

export default NavBar;