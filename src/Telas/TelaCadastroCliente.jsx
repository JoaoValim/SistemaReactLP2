import { Container } from "react-bootstrap";
import Page from "../Templates/Page";
import FormCadCliente from "./Formularios/FormCadCliente";
import TabelaClientes from "./Tabelas/TabelaClientes";
import { useState } from "react";
import "./Telas.css";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes,setListaClientes] = useState([])
    const [clienteEdicao,setClienteEdicao] = useState({
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:''
    })
    const [modoEdicao,setModoEdicao] = useState(false)
    return (
        <div className="tela-cad">
            <Container>
                <Page>
                    {
                        //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                        //e a visualização do registros já cadastrados.
                        exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} lista={listaClientes} setLista={setListaClientes} clienteEdicao = {clienteEdicao} setClienteEdicao={setClienteEdicao} modoEdicao={modoEdicao} setEdicao={setModoEdicao} /> : <TabelaClientes exibirFormulario={setExibirFormulario} lista={listaClientes} setLista={setListaClientes} clienteEdicao = {clienteEdicao} setClienteEdicao={setClienteEdicao} modoEdicao={modoEdicao} setEdicao={setModoEdicao} />
                    }
                </Page>
            </Container>
        </div>
    )
}