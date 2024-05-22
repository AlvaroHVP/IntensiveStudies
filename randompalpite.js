function jogar(){
const numAle = Math.floor(Math.random()*10) + 1;
let palpite;
let acertou = false;
let contador = 0;


while (!acertou) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10: "), 10);
    if (isNaN(palpite)) {
        alert("Por favor, insira um número válido.");
        continue;
    }
    contador += 1;
    if (palpite === numAle) {
        alert(`Parabéns, você acertou em ${contador} tentativas`)
        acertou = true;
    }
    else if(palpite < numAle) {
        alert("O número é maior que " + palpite)
    }
    else {
        alert("O número é menor que " + palpite)
    }
}
document.getElementById('mensagem').textContent = `Você acertou em ${contador} tentativas. Clique no botão para jogar novamente.`;

}

