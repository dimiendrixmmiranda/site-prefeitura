const aniversariantes = document.querySelector('#aniversariantes')
const btnDireita = aniversariantes.querySelector('.right')
console.log(btnDireita)
btnDireita.addEventListener('click', (e) => {
    e.preventDefault()
    const listaDeAniversariantes = aniversariantes.querySelectorAll('.conteudo-aniversariantes-item')
    listaDeAniversariantes[0].setAttribute('style', 'display: none;')
})