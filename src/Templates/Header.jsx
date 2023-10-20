
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Templates.css";
import { Link } from "react-router-dom";


export function Header(props) {
    return (
        <div className="header">
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className="title-navbar"><Navbar.Brand as={Link} to="/">SISTEMA</Navbar.Brand></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="header-navbar">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <NavDropdown title="Tabelas/Cadastros" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/cliente">Cliente</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/produto">Produto</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/fornecedor">Fornecedor</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/categoria">Categorias</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>

    );
}