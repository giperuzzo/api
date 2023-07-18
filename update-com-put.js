import { buscaProdutos } from "./read-com-get";

document.querySelector('listaProdutos').addEventListener('click', event => {
    //console.log9event.target

    if (event.target.closest('ul').classList.contains('produto')) {
        //console.log(event.target);
        const elementoBase = event.target.closes('ul');
        document.querySelector('input#id').value = elentoBase.querySelector ('[data-produto="id"]').innerHTML;
        
        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;
    )}
    }
