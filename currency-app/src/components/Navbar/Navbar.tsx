import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
// Redux
import { selectIsShown } from '../../redux/features/UI/UISlice';
// Reactstrap and React-bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, NavbarBrand } from 'reactstrap';

const Navigation: React.FC = () => {

    const isShown = useSelector(selectIsShown);

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand to={"/"} activeClassName="active" tag={RRNavLink}>Currency Application</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink to={"/"} activeClassName="active" tag={RRNavLink}>
                            Change current exchange
                        </NavLink>
                        {
                            isShown && (
                                <>
                                    <NavLink to={"/currencies"} activeClassName="active" tag={RRNavLink}>
                                        All latest exchanges
                                    </NavLink>
                                    <NavLink to={"/converter"} activeClassName="active" tag={RRNavLink}>
                                        Convert exchange
                                    </NavLink>
                                </>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navigation
