var elementosDuvida = document.querySelectorAll(' .duvida')
// Document: objeto / queryselector: método / all: todos do seletor, já o sem "all", pega apenas o primeiro
//    document.querySelectorAll(' .duvida')

// Selecionar uma lista, e para cada
// forEach: para cada
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })    
})

