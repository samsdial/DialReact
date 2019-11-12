/**/
import React, { useState } from 'react'
import styled from "styled-components";
import {
    A,
    Header as HeaderBs,
    Row,
    Col,
    Navbar,
    Container,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    H5,
    Img
} from '@bootstrap-styled/v4'
import { MyComponent, ButtonHeader, LinkHeader } from '../style/custom.Header'


const HeaderUnstyled: React.FC<{ className?: any }> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [drops, setDrop] = useState({
        dropNews: false,
        dropTools: false,

    })

    return (
        <HeaderBs className={className} shadowHeader>
            <Navbar toggleable="lg" className="py-2">
                <Container>
                    <div className="d-flex justify-content-between">
                        <NavbarBrand tag={A} to="#">
                            <Img src="static/images/logo_metrocuadrado@2x.png" />
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={toggle}
                        />
                    </div>
                    <Collapse navbar isOpen={isOpen}>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink href="#">
                                    Buscar Inmueble
                                </NavLink>
                            </NavItem>
                            <NavDropdown
                                className="mega-dropdown"
                                isOpen={drops.dropNews}
                                toggle={(): void =>{
                                    setDrop({ ...drops, dropNews: !drops['dropNews']})
                                }}
                            >
                                <DropdownToggle caret nav>
                                    Noticias y Tendencias
                                </DropdownToggle>
                                <DropdownMenu className="mega-menu v-1 z-depth-1 white py-5 px-3">
                                    <Row>
                                        <Col md="5" xl="3">
                                            <MyComponent>
                                                <H5>Title</H5>
                                            </MyComponent>

                                            <DropdownItem>
                                                Item
                                            </DropdownItem>
                                            <DropdownItem>
                                                Item 2
                                            </DropdownItem>
                                            <DropdownItem>
                                                Item 2
                                            </DropdownItem>
                                        </Col>
                                        <Col md="5" xl="9">
                                            <Row>
                                                <Col>Item</Col>
                                                <Col>Item</Col>
                                                <Col>Item</Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </DropdownMenu>
                            </NavDropdown>
                            <NavDropdown
                                className="mega-dropdown"

                                isOpen={drops.dropTools}
                                toggle={(): void =>{
                                    setDrop({ ...drops, dropTools: !drops['dropTools']})
                                }}
                            >
                                <DropdownToggle caret nav>
                                    Herramientas
                                </DropdownToggle>
                                <DropdownMenu className="mega-menu v-1 z-depth-1 white py-5 px-3">
                                    <Row>
                                        <Col md="5" xl="3">
                                            <DropdownItem>
                                                Item
                                            </DropdownItem>
                                        </Col>
                                        <Col md="5" xl="3">
                                            <DropdownItem>
                                                Item 2
                                            </DropdownItem>
                                        </Col>
                                        <Col md="5" xl="6">
                                            <DropdownItem>
                                                Item 2
                                            </DropdownItem>
                                        </Col>
                                    </Row>

                                </DropdownMenu>
                            </NavDropdown>
                        </Nav>
                        <LinkHeader>Link</LinkHeader>
                        <ButtonHeader>Publica tu Inmueble</ButtonHeader>
                    </Collapse>
                </Container>
            </Navbar>
        </HeaderBs>
    )
}
const Header = styled(HeaderUnstyled)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${props => props.theme['$zindex-navbar-fixed']};
    background-color: #fff;
    height: 52px;
    width: 100%;
    .navbar{
        .container{
            position: relative;
            padding: 0;
        }
        .navbar-toggler {
            border-color: lightgray;
            border: none;
        }
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }
    }
    .navbar-nav{

        .dropdown,
        .nav-item{
            .text-primary,
            .nav-link{
                font-size: .8em;
                color: black !important;
                text-transform: uppercase;
            }
        }
        .mega-dropdown {
            position: static;
            .dropdown-menu{
                top: 114%;
                &.mega-menu {
                    width: 100%;
                    border: none;
                    border-radius: 0;
                    min-width: 100%;
                    box-shadow: 0 3px 10px rgba(150,150,150,.6);
                }
            }

        }
    }
`;

export default Header
