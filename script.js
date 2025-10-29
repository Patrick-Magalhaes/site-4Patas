
document.addEventListener('DOMContentLoaded', () => {
 
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    

    if (botoesFiltro.length > 0) {
        
        const cardsAnimais = document.querySelectorAll('.animal-card');
        
        let filtrosAtivos = {
            especie: 'todos',
            genero: 'todos'
        };

        function aplicarFiltros() {
            cardsAnimais.forEach(card => {
                const especieCard = card.dataset.especie;
                const generoCard = card.dataset.genero;

                const passaEspecie = filtrosAtivos.especie === 'todos' || filtrosAtivos.especie === especieCard;
                const passaGenero = filtrosAtivos.genero === 'todos' || filtrosAtivos.genero === generoCard;

                if (passaEspecie && passaGenero) {
                    card.classList.remove('escondido');
                } else {
                    card.classList.add('escondido');
                }
            });
        }

        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {
                const grupo = botao.dataset.grupo; 
                const filtro = botao.dataset.filtro;

                if (filtrosAtivos.hasOwnProperty(grupo)) { 
                    filtrosAtivos[grupo] = filtro;
                }

                document.querySelectorAll(`.filtro-btn[data-grupo="${grupo}"]`).forEach(btn => {
                    btn.classList.remove('ativo');
                });
                
                botao.classList.add('ativo');

                aplicarFiltros();
            });
        });


        const botaoEspecieTodos = document.querySelector('.filtro-btn[data-grupo="especie"][data-filtro="todos"]');
        const botaoGeneroTodos = document.querySelector('.filtro-btn[data-grupo="genero"][data-filtro="todos"]');
        
        if (botaoEspecieTodos) botaoEspecieTodos.classList.add('ativo');
        if (botaoGeneroTodos) botaoGeneroTodos.classList.add('ativo');

        aplicarFiltros(); 
    }


    const formAdocao = document.querySelector('form:not(#form-voluntario)'); 
    const tituloAdocao = document.querySelector('.formulario-container h2');
    
    if (formAdocao && tituloAdocao && tituloAdocao.textContent.includes('Adoção')) {
        formAdocao.addEventListener('submit', (event) => {
            event.preventDefault();
            const nomeInput = document.getElementById('nome');
            const nome = nomeInput ? nomeInput.value : 'Visitante'; 
            alert(`Obrigado, ${nome}! Seu formulário de adoção foi recebido. Entraremos em contato em breve.`);
            formAdocao.reset();
        });
    }


    const formVoluntario = document.getElementById('form-voluntario');
    if (formVoluntario) {
        formVoluntario.addEventListener('submit', (event) => {
            event.preventDefault();
            const nomeInput = document.getElementById('nome');
            const nome = nomeInput ? nomeInput.value : 'Voluntário(a)'; 
            alert(`Bem-vindo(a) ao time, ${nome}! Seu cadastro foi recebido com sucesso. Logo entraremos em contato.`);
            formVoluntario.reset();
        });
    }
});
