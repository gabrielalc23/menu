import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = ()=>{
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
              <Nav.Link href="/sobre-mim">Sobre mim</Nav.Link>
              <Nav.Link className="ml-auto" href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
}
export default Menu;