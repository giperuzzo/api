    
    window.addEventListener('load', () => {

    
        //criando pagina no javascript dinamicamente

        const h1 = document.createElement('h1');
        h1.classList.add('titulo-pagina'); 
        h1.setAttribute('id','titulo');
        h1.setAttribute('data-test', 'title-test');
        h1.innerHTML = ('pagina dinamica');
        h1.style.color = "red";

        const h2 = document.createElement('h2');
        const p1 = document.createElement('p1');
        document.body.appendChild(h1).innerHTML = "Pagina Dinâmica";
        document.body.appendChild(h2).innerHTML = "Dinamico";
        document.body.appendChild(p1).innerHTML = "Criando pagina em Javascript";

    
});