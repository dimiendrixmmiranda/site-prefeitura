export const funcionarios = []

function adicionarFuncionario(nome, data, enderecoImagem){
    funcionarios.unshift({
        nome: nome,
        data: data,
        enderecoImagem: enderecoImagem
    })
}

adicionarFuncionario('Ana Paula Silva', '08/07', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Carlos Eduardo Nunes', '08/07', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Fernanda Costa', '15/01', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Marcos Vinícius Oliveira', '23/03', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Juliana Pereira', '30/04', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Ricardo Mendes', '12/06', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Patrícia Gomes', '05/08', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Lucas Ferreira', '19/09', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Gabriela Santos', '27/10', '../assets/imgs/avatar-mulher.png')
adicionarFuncionario('Rodrigo Almeida', '22/12', '../assets/imgs/avatar-mulher.png')
