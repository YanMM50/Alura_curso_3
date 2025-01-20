// l.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;

while (contador <= 10) {

console.log('Conte de ' + contador + ' até 10');

contador = contador + 1; //ou contador++

}

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contadoR = 10;

while (contadoR >= 0) {

console.log(contadoR);

contadoR--;

}

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let apice = prompt('Insira um número para iniciar a contagem regressiva');

while (apice >= 0) {

console.log(apice);

apice--;

}

//4. Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até está o número, usando um loop while no console do navegador.

let limite = prompt('Insira um número para iniciar a contagem');

let conTador = 0;

while (conTador <= limite) {

console.log(conTador);

conTador++

}

