let visor = document.getElementById('resultado');
let primeiroNumero = null;
let operadorAtual = null;
let aguardandoSegundoNumero = false;

// Inserir número
function inserir(num) {
    if (visor.innerText === "0" || aguardandoSegundoNumero) {
        visor.innerText = num;
        aguardandoSegundoNumero = false;
    } else {
        visor.innerText += num;
    }
}

// Limpar visor
function clean() {
    visor.innerText = "0";
    primeiroNumero = null;
    operadorAtual = null;
    aguardandoSegundoNumero = false;
}

// Apagar último caractere
function back() {
    visor.innerText = visor.innerText.slice(0, -1) || "0";
}

// Operadores
function somar() { adicionarOperador('+'); }
function subtrair() { adicionarOperador('-'); }
function multiplicar() { adicionarOperador('*'); }
function dividir() { adicionarOperador('/'); }
function porcentagem() {
    visor.innerText += '%';
}

// Adicionar operador ao visor e preparar cálculo
function adicionarOperador(op) {
    // Se último caractere já for operador, substitui
    let ultimo = visor.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimo)) {
        visor.innerText = visor.innerText.slice(0, -1) + op;
    } else {
        visor.innerText += op;
    }
}

// Calcular resultado
function calcular() {
    let exp = visor.innerText;

    // Substitui números com % por (número/100)
    exp = exp.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    try {
        visor.innerText = eval(exp);
    } catch (e) {
        alert("Expressão inválida!");
    }
}
