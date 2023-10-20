import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";


export default function TabelaFornecedor(props) {

    const [alerta,setAlerta] = useState(false);

    function excluir(fornecedor){
        if(window.confirm('Deseja realmente excluir? '))
        props.setLista(props.lista.filter((itemLista=> fornecedor.cnpj!==itemLista.cnpj)));

        setAlerta(true);
        setTimeout(() => {
            setAlerta(false);
        }, 3000);
    }

    function editarfornecedor(fornecedor){
        props.setFornEdicao(fornecedor);
        props.exibirFormulario(true);
        props.setEdicao(true);
    }

    return (
        <Container>
            <div className="btn-tabela-produto">
                <Button variant="ligth" type="button" onClick={()=>{
                    props.exibirFormulario(true);
                }}>Novo Fornecedor</Button> 
            </div>
            <Table variant="dark" striped bordered hover>
                <thead>
                    <tr className="top-tabela">
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>CEP</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista.map((fornecedor)=>{
                            return(
                                <tr key={fornecedor.cnpj}>
                                    <td>{fornecedor.nome}</td>
                                    <td>{fornecedor.cnpj}</td>
                                    <td>{fornecedor.cidade}</td>
                                    <td>{fornecedor.uf}</td>
                                    <td>{fornecedor.cep}</td>
                                    <td>
                                        <Button variant="danger" onClick={()=>{
                                            excluir(fornecedor);
                                            
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </Button>
                                         {' '}
                                        <Button onClick={()=>{
                                            editarfornecedor(fornecedor);
                                            props.exibirFormulario(true);
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
                    Exclusao de fornecedor realizada com sucesso!
                </Alert>
            )}
        </Container>
    );
}