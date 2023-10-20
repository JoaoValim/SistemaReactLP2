import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";
import AtualizarProduto from "../ferramentas/atualizarProduto";

// Obtém a lista de produtos do localStorage e converte de volta para um array JavaScript
var lista = JSON.parse(localStorage.getItem("produtos"));
if (lista == null) {
  lista = [];
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState: {
    status: ESTADO.OCIOSO,
    mensagem: '',
    listaProduto: [], // Inicializa com a lista obtida do localStorage
  },
  reducers: {
    adicionar: (state, action) => {
        const lista = JSON.parse(localStorage.getItem("produtos"))
        let json = action.payload
        json.id = lista.length + 1 
        lista.push(json)
        localStorage.setItem("produtos",JSON.stringify(lista))
        state.listaProduto.push(json);
    },
    remover: (state, action) => {
        let lista = JSON.parse(localStorage.getItem("produtos"));
        lista = lista.filter((itemLista) => itemLista.id !== action.payload.id);
        localStorage.setItem("produtos", JSON.stringify(lista));
        state.listaProduto=lista
    },
    atualizar: (state, action) => {
      AtualizarProduto(action.payload)
      
    }
  }
});

export const { adicionar, remover, atualizar } = produtoSlice.actions;
export default produtoSlice.reducer;
