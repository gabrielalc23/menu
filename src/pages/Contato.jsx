import { Button, Card, Container, Form, Nav, Navbar } from "react-bootstrap";

const Contato = () => {
    return (
        <>
            <Container className="mt-4">
                <Card>
                    <Card.Header>Contato</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>telefone</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control type="date" />
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Button className="mt-4
                            " variant="danger" type="submit">Enviar</Button>                </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>

    );
}
export default Contato;