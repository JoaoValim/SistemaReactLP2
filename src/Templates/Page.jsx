import  {Header}  from "./Header";
import Footer from "./Footer";
import "./Templates.css";



export default function Page(props){
    return(
        
        <>
            <Header/>
                <div>
                    {
                        //filhos da pagina
                    }
                    {props.children}
                </div>
            <Footer conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
        </>
            
        
    );
}