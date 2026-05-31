//Calcular Fatorial
function fatorial(n) {
    let resultado = 1;

    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}
//Formúla da combinação
function combinacao(n, p) {
    return fatorial(n) / (fatorial(p) * fatorial(n - p));
}
//Função que calcula o total e os números
function calcular() {

    const total = Number(document.getElementById("total").value);
    const apostados = Number(document.getElementById("apostados").value);

    if (apostados > total) {
        document.getElementById("resultado").innerHTML =
            "<p>❌ A quantidade apostada não pode ser maior que o total de números.</p>";
        return;
    }
//Ativação das Formúlas
    const combinacoes = combinacao(total, apostados);
    const probabilidade = 100 / combinacoes;

//Organização da explicação da Análise Combinatória e Probabilidade
    document.getElementById("resultado").innerHTML = `
        <h2>Resultado</h2>

        <p>
            <strong>Total de combinações:</strong>
            ${Math.round(combinacoes).toLocaleString('pt-BR')}
        </p>

        <p>
            <strong>Chance de ganhar:</strong>
            1 em ${Math.round(combinacoes).toLocaleString('pt-BR')}
        </p>

        <p>
            <strong>Probabilidade:</strong>
            ${probabilidade.toFixed(15)}%
        </p>

        <hr>

        <h2>Resolução da Análise Combinatória</h2>

        <p><strong>Passo 1:</strong> Existem ${total} números disponíveis.</p>

        <p><strong>Passo 2:</strong> Foram escolhidos ${apostados} números.</p>

        <p><strong>Passo 3:</strong> Aplicamos a fórmula:</p>

        <p>C(n,p) = n! / [p!(n-p)!]</p>

        <p><strong>Passo 4:</strong></p>

        <p>C(${total},${apostados})</p>

        <p><strong>Passo 5:</strong></p>

        <p>
            Resultado:
            ${Math.round(combinacoes).toLocaleString('pt-BR')}
            combinações possíveis.
        </p>

        <hr>

        <h2>Resolução da Probabilidade</h2>

        <p><strong>Fórmula:</strong></p>

        <p>
            Probabilidade =
            Casos Favoráveis ÷ Casos Possíveis
        </p>

        <p>
            Probabilidade =
            1 ÷ ${Math.round(combinacoes).toLocaleString('pt-BR')}
        </p>

        <p>
            Probabilidade =
            ${(1 / combinacoes).toExponential(4)}
        </p>

        <p>
            Convertendo para porcentagem:
        </p>

        <p>
            ${probabilidade.toFixed(15)}%
        </p>

        <p>
            ✅ Chance final:
            1 em ${Math.round(combinacoes).toLocaleString('pt-BR')}
        </p>
    `;
}

function gerarExercicio() {

    const total = Math.floor(Math.random() * 15) + 10;
    const escolhidos = Math.floor(Math.random() * 5) + 2;

    const resposta = combinacao(total, escolhidos);

    document.getElementById("exercicio").innerHTML = `
        <h2>Exercício</h2>

        <p>
            Uma turma possui ${total} alunos.
            Quantos grupos diferentes de
            ${escolhidos} alunos podem ser formados?
        </p>

        <button onclick="mostrarResolucao(${total}, ${escolhidos}, ${resposta})">
            Ver Resolução
        </button>
    `;
}

function mostrarResolucao(total, escolhidos, resposta) {

    document.getElementById("exercicio").innerHTML += `
        <hr>

        <h3>Resolução</h3>

        <p>
            Como a ordem dos alunos não importa,
            utilizamos combinação simples.
        </p>

        <p>
            Fórmula:
        </p>

        <p>
            C(n,p) = n! / [p!(n-p)!]
        </p>

        <p>
            Substituindo:
        </p>

        <p>
            C(${total},${escolhidos})
        </p>

        <p>
            Resultado:
            ${Math.round(resposta).toLocaleString('pt-BR')}
        </p>

        <p>
            Logo, serão formados
            ${Math.round(resposta).toLocaleString('pt-BR')}
            grupos diferentes.
        </p>
    `;
}
