export function criarElementoSlider(urlImagem = '', tituloNoticia = '', descricaoNoticia = '', classe) {
    const li = document.createElement('li')
    li.classList.add(classe)
    const a = document.createElement('a')
    a.setAttribute('href', '#')
    const divImagem = document.createElement('div')
    divImagem.classList.add('imagem')
    divImagem.setAttribute('style', `background-image: url('${urlImagem}')`)
    a.appendChild(divImagem)
    const divTextos = document.createElement('div')
    divTextos.classList.add('textos')
    
    if(tituloNoticia != ''){
        const p1 = document.createElement('p')
        p1.classList.add('titulo-noticia')
        p1.innerHTML = tituloNoticia
        divTextos.appendChild(p1)
    }
    
    if(descricaoNoticia != ''){
        const p2 = document.createElement('p')
        p2.classList.add('descricao-noticia')
        p2.innerHTML = descricaoNoticia
        divTextos.appendChild(p2)
    }
    
    a.appendChild(divTextos)
    li.appendChild(a)
    return li
}