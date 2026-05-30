function fatorial(n) {
    let resultado = 1;

    for(let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

function combinacao(n, p) {
    return fatorial(n) / (fatorial(p) * fatorial(n - p));
}

function calcular() {

    const total = Number(document.getElementById("total").value);

    const apostados = Number(document.getElementById("apostados").value);

    if (apostados > total) {
        document.getElementById("resultado").innerHTML =
            "<p>A quantidade apostada não pode ser maior que o total de números.</p>";
        return;
    }

    const combinacoes = combinacao(total, apostados);

    document.getElementById("resultado").innerHTML = `
        <h2>Resultado</h2>

        <p><strong>Total de combinações:</strong>
        ${combinacoes.toLocaleString('pt-BR')}</p>

        <p><strong>Chance de ganhar:</strong>
        1 em ${combinacoes.toLocaleString('pt-BR')}</p>

        <p><strong>Probabilidade:</strong>
        ${(100 / combinacoes).toFixed(8)}%</p>
    `;
}