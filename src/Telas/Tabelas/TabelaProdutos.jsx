import { Button, Container, Table } from "react-bootstrap";
import "./Tabela.css";
import { useSelector } from "react-redux";
import RenderizadorProduto from "../Renderizadores/RenderizadorProduto";
export default function TabelaProdutos(props) {
    const {status,mensagem,listaProduto} = useSelector(state=>state.produto);   
    return (
        <Container>
            <div className="btn-tabela-produto">
                <Button variant="ligth" type="button" onClick={()=>{
                    props.exibirFormulario(true);
                    props.setmodoEdicao(false)
                }}>Novo Produto</Button>
            </div>
            <Table className="table table-dark table-hover" striped bordered hover>
                <thead>
                    <tr className="top-tabela"> 
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Tamanho</th>
                        <th>Valor(R$)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProduto.map((produto)=>
                            <RenderizadorProduto  key={produto.id} produto={produto} setmodoEdicao={props.setmodoEdicao} formulario={props.exibirFormulario} setEdicao={props.setEdicao} acoes={true} />
                        )
                    }
                </tbody>
                
            </Table>
        </Container>
    );
}