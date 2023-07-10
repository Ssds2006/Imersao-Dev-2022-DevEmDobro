//OBJETIVO 1 - PASSAR O MOUSE EM CIMA DO PERSONAGEM

// passo-1- pegar os personagens no JS para verificar quando o usuário pasar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// passo-2- adicionar a classe selecionado no personagem que o usuário passar o curso do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top :0, behavior: 'smooth'});
        }

        //passo-3- verificar se já existe um personagem selecionado, se sim devemos remover a seleção dele
        const personagemSelecionado = document.querySelector ('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - qunado passra o mouse em cima do personagem na lista trocar a imagem

        // passo-1-pegar o elemento do personagem grande para adicionar as informações

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo-2- alterar a imagem do personagem grande

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`; 

        // passo-3- alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo4- alterar a descrição do personagem grande

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
       
    })
})