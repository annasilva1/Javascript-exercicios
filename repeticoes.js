// while

let c = 1;

while (c <= 6) {
  console.log(`passo ${c}`);
  c++; // incrementa
}

console.log()

let b = 1;
do {
  console.log("teste logico no final");
  b++;
} while (b <= 6);

console.log()

//for
console.log("vai começar a contagem...");

for (let a = 1; a <= 8; a++) {
  console.log(a);
}
console.log("acabou");

// // //

console.log()

// for com array

frutas = ["banana", "maça", "abacate", "kiwi"];

recebeFruta = frutas[0];

for (let i = 0; i < 4; i++) {
  console.log(`eu imprimi ${recebeFruta} 4 vezes`);
}

console.log()

// imprimindo o array com for

frutas2 = ["morango", "melancia", "pera", "jabuticaba"];

for (let i = 0; i < frutas2.length; i++) {
  console.log(frutas2[i]);
}

console.log()

// maneira mais simplificada

cores = ["azul", "roxo", "rosa"]

for (let i in cores){
  console.log(cores[i])
}

// // //

console.log()

personagens = [
  {nome: "josefa", magia: 25},
  {nome: "nataly", magia: 85},
  {nome: "lix", magia: 15}
]

for (let p in personagens){
  console.log(`${personagens[p].nome} - ${personagens[p].magia}`)
}

console.log()

for (let p in personagens){
  personagens[p].nome = personagens[p].nome.toUpperCase()
}

console.log(personagens)