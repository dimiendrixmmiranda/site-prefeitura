import { funcionarios } from "./dados/funcionarios.js";

const dataAtual = `${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}/${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}`
const elementoConteudoAniversariante = document.querySelector('.conteudo-aniversariantes-lista')
const aniversariantes = funcionarios.filter(funcionario => funcionario.data === dataAtual)

if (aniversariantes.length > 0) {
    aniversariantes.forEach(aniversariante => {
        const li = criarContainerAniversariante(aniversariante.nome, aniversariante.enderecoImagem)
        elementoConteudoAniversariante.appendChild(li)
    })
} else {
    const li = document.createElement('li')
    li.classList.add('conteudo-aniversariantes-lista-item-semAniversariantes')
    li.innerHTML = 'Sem aniversariantes hoje'
    elementoConteudoAniversariante.appendChild(li)
    elementoConteudoAniversariante.parentElement.querySelectorAll('button').forEach(btn => btn.style.display = 'none')
}

const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const lis = document.querySelectorAll('.conteudo-aniversariantes-lista-item')
const qtdeCardsAniversariantes = lis.length
let margem = 0

if (lis > 0) {
    lis[0].style.marginLeft = `${margem}`
}

btnLeft.addEventListener('click', (e) => {
    e.preventDefault()
    if (lis != []) {
        if (margem > 0) {
            margem -= 100
            lis[0].style.marginLeft = `-${margem}%`
        } else {
            margem = 0
        }
    }
})
btnRight.addEventListener('click', (e) => {
    e.preventDefault()
    if (lis != []) {
        if (margem < (qtdeCardsAniversariantes * 100) - 100) {
            margem += 100
            lis[0].style.marginLeft = `-${margem}%`
        } else {
            margem = (qtdeCardsAniversariantes * 100) - 100
        }
    }
})

function criarContainerAniversariante(nome, enderecoImagem) {
    const li = document.createElement('li')
    li.classList.add('conteudo-aniversariantes-lista-item')

    const div = document.createElement('div')
    div.classList.add('container')

    const divConteudoAniversarianteImagem = document.createElement('div')
    divConteudoAniversarianteImagem.classList.add('conteudo-aniversariantes-lista-item-imagem')
    divConteudoAniversarianteImagem.setAttribute('style', `background-image: url("${enderecoImagem}")`)

    const divConteudoAniversarianteTextos = document.createElement('div')
    divConteudoAniversarianteTextos.classList.add('conteudo-aniversariantes-lista-item-textos')
    divConteudoAniversarianteTextos.innerHTML = `
    <p> Feliz aniversário!</p>
    <p>
        A prefeitura de Joaquim Távora parabenebiza o servidor <strong>${nome}</strong> pelo seu aniverário! Agradecemos pelo seu trabalho e
        dedicação. Que seu dia seja repleto de alegria e sucesso!
    </p>
    `

    div.appendChild(divConteudoAniversarianteImagem)
    div.appendChild(divConteudoAniversarianteTextos)
    li.appendChild(div)

    return li
}