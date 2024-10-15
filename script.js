const caixaPrincipal = document.querySelector(".caixa-principal");

    const caixaPerguntas = document.querySelector(".caixa-perguntas"); 
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado"); 
    const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 3",
    alternativas: ["Alternativa 1”, “Alternativa 2"]
}
    ];
    let atual = 0;
    let perguntaAtual;

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(); 
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas)
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
    perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraPergunta();
}
const perguntas = [
    {
    enunciado: "Insira o enunciado da Pergunta 1",
    alternativas: ["Alternativa 1”, “Alternativa 2"],
    },
