// algoritmo que calcula a media

// formula - media = (nota1 + nota2 + nota3) / 3;


let aluno1 = 4;
let aluno2 = 7;
let aluno3 = 9;

let media = (aluno1 + aluno2 + aluno3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log ("reprovado");
} else if (media >= 5 && media <=7){
    console.log ("recuperação");
} else {
    console.log ("aprovado");
}

// calcule o imc

// formula 
// IMC = peso / (altura * altura)

let peso = 67;
let altura = 1.58;
let calculoIMC = peso / Math.pow(altura,2);
console.log (calculoIMC.toFixed(2));

if (calculoIMC < 18.5) {
    console.log ("abaixo do peso");
} else if (calculoIMC >= 18.5 && calculoIMC < 25) {
    console.log ("saudavel");
} else if (calculoIMC >= 25 && calculoIMC < 30) {
    console.log ("acima do peso");
} else if (calculoIMC >= 30 && calculoIMC < 40) {
    console.log ("obeso");
} else {
    console.log ("grave");
}

// calcule o que deve ser pago por um produto

let valorProduto = 100;

let formaPagamento = 4;


if (formaPagamento === 1) {
   console.log(valorProduto - (valorProduto * 0.1));
} else if (formaPagamento === 2) {
    console.log(valorProduto - (valorProduto * 0.15));
} else if (formaPagamento === 3) {
    console.log(valorProduto);
} else {
    console.log(valorProduto + (valorProduto * 0.1));
}


