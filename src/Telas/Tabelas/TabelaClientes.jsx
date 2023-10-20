import { Button, Container, Table, Alert} from "react-bootstrap";
import { useState } from "react";
import "./Tabela.css";

export default function TabelaClientes(props) {

    const [alerta, setAlerta] = useState(false); 

    function excluir(cliente){
        console.log(props.lista)
        if(window.confirm('Deseja realmente excluir? '))
        props.setLista(props.lista.filter((itemLista=> cliente.cpf!==itemLista.cpf)))
        console.log(props.lista.filter((itemLista=> cliente.cpf!==itemLista.cpf)))

        setAlerta(true);
        setTimeout(() => {
            setAlerta(false);
        }, 3000);
    }

    function editarCliente(cliente){
        props.setClienteEdicao(cliente);
        props.exibirFormulario(true);
        props.setEdicao(true);
    }

    return (
        <Container>
            <div className="btn-tabela">
                <Button variant="ligth" type="button" className="btn-tabela1" onClick={()=>{
                    props.exibirFormulario(true);   
                }}>Novo Cliente</Button> 
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela">
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Bairro</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista.map((cliente)=>{
                            return (
                                <tr key={cliente.cpf}>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.endereco+", n° "+cliente.numero}</td>
                                    <td>{cliente.bairro}</td>
                                    <td>{cliente.cidade+'/'+cliente.uf}</td>
                                    <td>{cliente.cep}</td>
                                    <td>
                                        <Button variant="danger" onClick={()=>{
                                            excluir(cliente);
                                            
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                        </Button>
                                         {' '}
                                        <Button onClick={()=>{
                                            editarCliente(cliente)
                                        }}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {alerta && (
                <Alert variant="danger" className="mt-3">
                    Exclusao de cliente realizada com sucesso!
                </Alert>
            )}
        </Container>
    );
}