import { Container } from "react-bootstrap";
import Page from "../Templates/Page";
import TabelaCategorias from "./Tabelas/TabelaCategorias";

export default function TelaCategoria(props){

    if(localStorage.getItem("produtos")==null)
        localStorage.setItem("produtos",JSON.stringify([]))
    

    return(
        <div className="tela-cad">
            <Container>
                <Page>
                    <TabelaCategorias/>
                </Page>
            </Container>
        </div>
    )
}