import "./Templates.css";

export default function Footer(props){
    return (
        <footer className="footer">
            <div style={{
                            border:'1px solid black',
                            borderRadius:'5px',
                            padding:'5px',
                            margin:'3px',
                        }}>
                <p>{props.conteudo||"Rodapé do sistema."}</p>
            </div>
        </footer>
    )
}