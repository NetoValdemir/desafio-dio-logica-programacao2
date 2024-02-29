//Entrada de Dados
let vitorias = 115;
let derrotas = 10;
let saldo = vitorias - derrotas;
let nivel = rank(saldo);

//Chamando função
console.log("O Herói tem de saldo de " + saldo + " e está no nível de " + nivel);

//Função de nivelamento de ranking
function rank(saldo) {
    if (saldo < 10) {
        return "Ferro";
    }
    if (saldo >= 10 && saldo <= 20) {
        return "Bronze";
    }
    if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    }
    if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    }
    if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    }
    if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    }
    if (saldo >= 101) {
        return "Imortal";
    }

}