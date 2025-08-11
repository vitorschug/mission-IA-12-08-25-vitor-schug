const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1: Porque o Adrian é cachorrinho das meninas?",
        alternativas: [
            {
            
            texto: "Alternativa A) Por que ele é Petista ",
            afirmacao: "afirmação"
            },
            {
            texto: "Alternativa B) porque ele gosta de ser gado",
            afirmacao: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 2: Porque a NVIDIA lança placa de video nova todo ano?",
        alternativas: [
            {
                texto: "Alternativa A) Porque querem apenas vender placas mais potente e não tão nem ai pra nada",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa B)  Ela lança novas placas de vídeo anualmente como parte de sua estratégia para manter a competitividade no mercado e atender à demanda por desempenho gráfico aprimorado em jogos e aplicações de inteligência artificial.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 3: qual o jogo que mais vendeu em seu lançamento",
        alternativas: [
            {
                texto: "Alternativa A) Grand Theft Auto V",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa B) Wii Sports",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 4: Qual é o jogo de ação mais popular atualmente",
        alternativas: [
            {
                texto: "Alternativa A) Call of Duty",
                afirmacao: "afirmação"
            },
            {
                texto: "Alternativa B) Battlefield 6",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 5: Qual é o objetivo principal do jogo Minecraft?",
        alternativas: [
            {
                texto:"Alternativa A) Construir estruturas e sobreviver",
                afirmacao:"afirmação"
            },
            {
                texto: "Alternativa B) Derrotar o Ender Dragon",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            
        caixaAlternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal = afirmacoes;
atual++;
mostraPergunta();

}

mostraPergunta();
