import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import produtoSlice from './produtoReducer'
import fornecedorSlice from './fornecedoresReduce';

const store = configureStore({
    reducer:{
        produto: produtoSlice,
        cliente: clienteSlice,
        fornecedor:fornecedorSlice,
    }
});

export default store;