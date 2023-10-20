import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
<<<<<<< HEAD
import produtoSlice from './produtoReducer'
=======
>>>>>>> d751271bd032742e25860de64a915919ff1622b0
import fornecedorSlice from './fornecedoresReduce';

const store = configureStore({
    reducer:{
        produto: produtoSlice,
        cliente: clienteSlice,
<<<<<<< HEAD
        fornecedor:fornecedorSlice,
=======
        fornecedor:fornecedorSlice
>>>>>>> d751271bd032742e25860de64a915919ff1622b0
    }
});

export default store;