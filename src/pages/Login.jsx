import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setVisible(!visible);
    }
    function submitForm(event){
        alert('Penis');
        Form.preventDefault();
    }

    return (
        <>
            <Container className="mt-4">
                <Card>
                    <Card.Header>Form Login</Card.Header>
                    <Card.Body className="p-5">
                        <Form onSubmit={submitForm} method="get">
                            <Form.Label className="mt-4">Email</Form.Label>
                            <Form.Control type="email" placeholder="Insira seu email" required/>
                            <Form.Label className="mt-2">Senha</Form.Label>
                            <div className="input-group">
                                <Form.Control 
                                    type={visible? "text" : "password"} 
                                    placeholder="Insira sua senha"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span className="input-group-text" onClick={handlePasswordVisibility}>
                                    {visible? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </span>
                            </div>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                                <Button
                                    type="submit"
                                    variant="danger"
                                    className="">Enviar
                                </Button>
                            </Card.Footer>
                </Card>
            </Container>
        </>
    );
};

export default Login;