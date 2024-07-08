import { criarElementoSlider } from "./criarElementoSlider.js";
import { listaNoticias } from "./dados/listaNoticias.js";

const elementoListaOutrasNoticias = document.querySelector('.conteudo-outrasNoticias')
// lista de noticias em cards
const listaOutrasNoticias = listaNoticias.slice(5)

listaOutrasNoticias.forEach(noticia => {
    const li = criarElementoSlider(noticia.enderecoDaImagem, noticia.tituloDaNoticia, noticia.descricaoDaNoticia, 'conteudo-outrasNoticias-item')
    elementoListaOutrasNoticias.appendChild(li)
})
