export default function AtualizarProduto(produto){
    var lista = JSON.parse(localStorage.getItem("produtos"))
    var i=0
    while(i<lista.length && lista[i].id !== produto.id){
        i++
    }

    if(lista[i].id === produto.id){
        lista[i]=produto
        localStorage.setItem("produtos",JSON.stringify(lista))
    }
}