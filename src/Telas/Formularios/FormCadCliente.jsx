// props.setLista([...props.lista.filter((itemCliente) => itemCliente.cpf !== cliente.cpf)])
// props.setLista([...props.lista, cliente])


import { Button, Container, Form, Row, Col, FloatingLabel, Alert } from "react-bootstrap";
import { useState } from "react";
import "./FormStyle.css";

export default function FormCadCliente(props) {
    const [cliente, setCliente] = useState(props.clienteEdicao);
    const [formValidado, setFormValidado] = useState(false);
    const [alerta, setAlerta] = useState(false);
    const tipoJson = {
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:''
    }

    function ManipularMudancas(e) {
        const componente = e.currentTarget;
        setCliente({ ...cliente, [componente.name]: componente.value });
    }

    function ManipularSubmit(e) {
        const form = e.currentTarget;
        var lista
        if (form.checkValidity()) {
            //todos os campos preenchidos
            //mandar os dados para o backend
            if (!props.modoEdicao) {
                //Nao esta no modo edicao
                props.setLista([...props.lista, cliente])
            } else {
                //Esta no modo edicao
                let i=0;
                while(i<props.lista.length && props.lista[i].cpf !== cliente.cpf)
                    i++
                lista = props.lista
                lista[i]=cliente
                props.setLista(lista)
            }
            if(!props.modoEdicao)  
                setCliente(tipoJson)
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }

        if (!form.checkValidity()) {
            setAlerta(false);
        }
        else {
            setAlerta(true);
            setTimeout(() => {
                setAlerta(false);
            }, 3000);
        }

        e.stopPropagation();
        e.preventDefault();


    };


    return (
        <div className="form-cad-cliente">
            <Container>
                <Form noValidate validated={formValidado} onSubmit={ManipularSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>CPF:</p>
                                <FloatingLabel label="CPF:" className="mb-3">
                                    {
                                    props.modoEdicao?
                                    <Form.Control type="text" placeholder="000.000.000-00" id="cpf" name="cpf" value={cliente.cpf} onChange={ManipularMudancas} required disabled/>
                                    :
                                    <Form.Control type="text" placeholder="000.000.000-00" id="cpf" name="cpf" value={cliente.cpf} onChange={ManipularMudancas} required/>

                                    }
                                    
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <p>Nome:</p>
                                <FloatingLabel
                                    label="Nome Completo:"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Informe o nome completo" id="nome" name="nome" value={cliente.nome} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Form.Group>
                                <p>Endereço:</p>
                                <FloatingLabel
                                    label="Endereço:"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." id="endereco" name="endereco" value={cliente.endereco} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <p>Numero:</p>
                                <FloatingLabel
                                    label="Número"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Nº" id="numero" name="numero" value={cliente.numero} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <p>Bairro:</p>
                                <FloatingLabel
                                    label="Bairro:"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Bairro/Vila..." id="bairro" name="bairro" value={cliente.bairro} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <p>Cidade:</p>
                                <FloatingLabel
                                    label="Cidade"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Cidade" id="cidade" name="cidade" value={cliente.cidade} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <p>UF:</p>
                            <FloatingLabel controlId="floatingSelect" label="UF:">
                                <Form.Select aria-label="Unidades Federativas brasileiras" id="uf" name="uf" value={cliente.uf} onChange={ManipularMudancas} required>
                                    <option value="SP">São Paulo</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <p>CEP:</p>
                                <FloatingLabel
                                    label="CEP:"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="CEP..." id="cep" name="cep" value={cliente.cep} onChange={ManipularMudancas} required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset={5} className="d-flex justify-content-end">
                            <Button type="submit" variant="dark">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                        </Col>
                        <Col md={6} offset={5}>
                            <Button type="button" variant="warning" onClick={() => {
                                props.exibirFormulario(false);
                                props.setEdicao(false)
                                props.setClienteEdicao(tipoJson)
                            }}>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
                {alerta && (
                    <Alert variant="success" className="mt-3">
                        Cadastro de cliente bem-sucedido!
                    </Alert>
                )}
            </Container>
        </div>
    );
}