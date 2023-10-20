import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

//name, initialState e reducers são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor. 
const fornecedorSlice = createSlice({
    name:'fornecedor',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaFornecedores:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionar:(state, action)=>{
            state.listaFornecedores.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaFornecedores = state.listaFornecedores.filter(forne => forne.cnpj !== action.payload.cnpj);
        },
        atualizar:(state,action)=>{
            
            const listaTemporariaClientes = state.listaFornecedores.filter(forn => forn.cnpj !== action.payload.cnpj);
            state.listaFornecedores = [...listaTemporariaClientes, action.payload];
        }

    }
});
export const {adicionar,remover,atualizar} = fornecedorSlice.actions; 
export default fornecedorSlice.reducer;