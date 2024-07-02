const galeriaObras = document.querySelector('#galeriaObras')
const btnRight = galeriaObras.querySelector('.right')
const btnLeft = galeriaObras.querySelector('.left')

let variavel = 0

btnRight.addEventListener('click', (e) => {
    e.preventDefault()
    variavel += 100
    const ul = galeriaObras.querySelector('ul')
    const larguraScroll = ul.scrollWidth
    if (variavel <= larguraScroll) {
        ul.scroll({
            top: 0,
            left: variavel,
            behavior: "smooth"
        })
    } else {
        variavel = larguraScroll
    }
})
btnLeft.addEventListener('click', (e) => {
    e.preventDefault()
    variavel -= 100
    const ul = galeriaObras.querySelector('ul')
    const larguraScroll = ul.scrollWidth
    if (variavel >= 0 && variavel <= larguraScroll) {
        ul.scroll({
            top: 0,
            left: variavel,
            behavior: "smooth"
        })
    } else {
        variavel = 0
    }
})