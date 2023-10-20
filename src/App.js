import TelaCadastroCliente from "./Telas/TelaCadastroCliente";
import TelaCadastroProduto from "./Telas/TelaCadastroProduto";
import TelaCadastroFornededor from "./Telas/TelaCadastroFornecedor";
import TelaHome from "./Telas/TelaHome";
import TelaCategoria from "./Telas/TelaCategoria";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Routes>
            {
              //os caminhos(path) devem ser organizados do mais especifico para o mais geral
            }
          <Route path="/cliente" element={<TelaCadastroCliente/>} />
          <Route path="/produto" element={<TelaCadastroProduto/>} />
          <Route path="/fornecedor" element={<TelaCadastroFornededor/>} />
          <Route path="/categoria" element={<TelaCategoria/>} />
          <Route path="/" element={<TelaHome/>} />
          </Routes>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
