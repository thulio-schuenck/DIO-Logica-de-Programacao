function getsVitorias() {
    // Simule a entrada de vitórias
    return '100';
}

function getsDerrotas() {
    // Simule a entrada de derrotas
    return '0';
}


let quantidadeVitorias = parseFloat(getsVitorias());
let quantidadeDerrotas = parseFloat(getsDerrotas());
let saldoRankeada = quantidadeVitorias - quantidadeDerrotas;
let nivel = [];


if (saldoRankeada <= 10) {
    nivel.push("Ferro");
} else if(saldoRankeada <= 20) {
    nivel.push("Bronze");
} else if(saldoRankeada <= 50) {
    nivel.push("Prata");
} else if(saldoRankeada <= 80) {
    nivel.push("Ouro");
} else if(saldoRankeada <= 90) {
    nivel.push("Platina");
} else if(saldoRankeada <= 100) {
    nivel.push("Ascendente");
} else if(saldoRankeada <= 110) {
    nivel.push("Imortal");
} else { 
    nivel.push("Radiante");
}

console.log(`O Herói tem saldo de ${saldoRankeada} e está no nível ${nivel.join(', ')}`);
