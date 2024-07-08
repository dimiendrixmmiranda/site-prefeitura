export const listaAvisosImportantes = []

function adicionarNovoAvisoImportante (titulo, enderecoDaImagem){
    listaAvisosImportantes.unshift({
        titulo: titulo,
        enderecoDaImagem: enderecoDaImagem // futuramente vai ser um objeto para cada tamanho de tela vai ter uma imagem
    })
}

adicionarNovoAvisoImportante('Jotatec', 'https://www.controlemunicipal.com.br/inga/sistema/imagens/123/010724141826_47075406eee445809bf46cbc309fef86_jpeg.jpeg')
adicionarNovoAvisoImportante('IPTU', 'https://www.controlemunicipal.com.br/inga/sistema/imagens/123/210224120935_img6462_jpeg.jpeg')
adicionarNovoAvisoImportante('Logo Paraná', '../assets/imgs/logo-parana.png')
adicionarNovoAvisoImportante('IPTU', 'https://www.controlemunicipal.com.br/inga/sistema/imagens/123/210224120935_img6462_jpeg.jpeg')