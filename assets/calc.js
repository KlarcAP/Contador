function calculadora() {
    const opera = Number(prompt("Escolha uma operação:\n 1 -Soma (+)\n 2 - Subtração (-)\n 3 - Divisão real (/)\n 4 - Multiplicação (*)\n 5 - DIvisão Inteira (%)\n 6 - Potenciação (**)\n")); 
}

calculadora();

let n1 = Number(prompt('Insira o primeiro o valor'));
let n2 = Number(prompt("Insira o segundo o valor"));
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}
function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}
function divReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}
function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1}) * ${n2} = ${resultado}`);
    novaOperacao();
}
function divInteiro() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} % ${n2} = ${resultado}`);
    novaOperacao();
}
function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    novaOperacao();
}

function novaOperacao() {
    let opcao = prompt('Deseja fazer utraoperação?\n ! - Sim\n 2 - Não');

    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
      alert('Até mais!')
    }
}

    
if (opera == 1) {
    soma();
} else if (opera == 2) {
    subtracao();
} else if (opera == 3) {
    divReal();
} else if (opera == 4) {
    multiplicacao();
} else if (opera == 5) {
    divInteiro();
} else if (opera == 6) {
    potenciacao();
}

calculadora();
