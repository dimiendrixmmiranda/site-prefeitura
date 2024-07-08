import { criarElementoSlider } from "./criarElementoSlider.js";
import { listaAvisosImportantes } from "./dados/listaAvisosImportantes.js";
const elementoListaDeAvisosImportantes = document.querySelector('.container-slider-imagens')
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
listaAvisosImportantes.forEach(aviso => {
    const li = criarElementoSlider(aviso.enderecoDaImagem)  
    elementoListaDeAvisosImportantes.appendChild(li)
})
const lis = document.querySelectorAll('.container-slider-imagens li')
const quantidadeDeImagens = lis.length
let margem = 0
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