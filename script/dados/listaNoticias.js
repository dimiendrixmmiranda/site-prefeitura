export const listaNoticias = []

function adicionarNoticias(enderecoDaImagem, tituloDaNoticia, descricaoDaNoticia){
    listaNoticias.push({
        enderecoDaImagem: enderecoDaImagem,
        tituloDaNoticia: tituloDaNoticia,
        descricaoDaNoticia: descricaoDaNoticia
    })
}

adicionarNoticias('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgc4iD-L0EFmg-X1dLUNvEmUMdBBfZB1FMQ&s', 'Avenida Paraná ganha mais um semárforo', 'A Avenida Paraná, uma das principais vias de circulação na cidade, acaba de receber mais um semáforo. A nova instalação tem como objetivo principal melhorar o fluxo de veículos e aumentar a segurança de motoristas e pedestres.')
adicionarNoticias('https://i.ytimg.com/vi/oWK9Px9k8vo/maxresdefault.jpg', 'Avenida Paraná ganha mais um semárforo', 'A Avenida Paraná, uma das principais vias de circulação na cidade, acaba de receber mais um semáforo. A nova instalação tem como objetivo principal melhorar o fluxo de veículos e aumentar a segurança de motoristas e pedestres.')