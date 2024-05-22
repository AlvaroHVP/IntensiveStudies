const numAle = Math.floor(Math.random()*100) + 1;
let palpite;
let acertou = false;

while (!acertou) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100: "), 10);
    if (palpite === numAle) {
        alert("Parabéns")
        acertou = true;
    }
    else if(palpite < numAle) {
        alert("O número é maior que " + palpite)
    }
    else {
        alert("O número é menor que " + palpite)
    }
}