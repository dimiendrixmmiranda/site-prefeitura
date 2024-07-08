import { criarElementoSlider } from "./criarElementoSlider.js"
import { listaNoticias } from "./dados/listaNoticias.js"
const btnRight = document.querySelector('.conteudo-noticias .btn-right')
const btnLeft = document.querySelector('.conteudo-noticias .btn-left')
const conteudoNoticiasLista = document.querySelector('.conteudo-noticias-lista')
const noticiasPrincipais = listaNoticias.slice(0,5)

noticiasPrincipais.forEach(noticia => {
    const li = criarElementoSlider(noticia.enderecoDaImagem, noticia.tituloDaNoticia, '', 'conteudo-noticias-lista-item')
    conteudoNoticiasLista.appendChild(li)
})
const lis = document.querySelectorAll('.conteudo-noticias-lista li')
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