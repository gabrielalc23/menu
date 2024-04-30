import { Card, CardBody, Container } from "react-bootstrap";

const SobreMim = ()=>{
    return(
        <>
            <Card className="mt-4">
                <Card.Header>Sobre mim</Card.Header>
                <CardBody>
                    <Container>
                        <p>Me chamo Gabriel, i havo 17 anos e quero me apronfundar na programação visando meu primeiro emprego, <br />Ou quem sabe eu fazer minha própria renda 8===D</p>
                    </Container>
                </CardBody>
            </Card>
        </>
    );
}
export default SobreMim;