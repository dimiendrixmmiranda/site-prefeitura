import { avisosImportantes } from "./dados/avisosImportantes.js";
const elementoListaDeAvisosImportantes = document.querySelector('.container-slider-imagens')

avisosImportantes.forEach(aviso => {
    const li = document.createElement('li')

    // no dados avisos importantes vai ter um objeto com a imagem para cada tamanho de tala, vamos fazer a verificação aq
    console.log(window.innerWidth)
    
    li.setAttribute('style', `background-image: url(${aviso.enderecoDaImagem});`)
    elementoListaDeAvisosImportantes.appendChild(li)
})

const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const lis = document.querySelectorAll('.container-slider-imagens li')
let margem = 0
const quantidadeDeImagens = lis.length
lis[0].style.marginLeft = `${margem}`

btnRight.addEventListener('click', (e) => {
    e.preventDefault()
    if (margem < (quantidadeDeImagens * 100) - 100) {
        margem += 100
        lis[0].style.marginLeft = `-${margem}%`
    } else {
        margem = (quantidadeDeImagens * 100) - 100
    }
})

btnLeft.addEventListener('click', (e) => {
    e.preventDefault()
    if (margem > 0) {
        margem -= 100
        lis[0].style.marginLeft = `-${margem}%`
    } else {
        margem = 0
    }
})