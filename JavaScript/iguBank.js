// 3 operações: Deposito, saque, extrato e sair. 

const limiteSaque = 3

let saldo = 0
let limite = 500
let extrato = ""
let numeroSaque = 0

while (true) {
    menu = prompt(`
    [d] Depósito
    [s] Saque
    [e] Extrato
    [q] Sair
    `);

    if (menu == "d") {
        valor = parseFloat(prompt("Informe o valor do depósito: "))
     
        if (valor > 0) {
            saldo += valor ;
            extrato += `Depósito de R$${valor} \n`
            alert(`Depósito de R$${valor} realizado`);
        } else {
            alert('Operação falhou! O valor informado é inválido!');

        }
    } 
    else if(menu == "s"){
        valor = parseFloat(prompt("Informe o valor de saque: "));
        excedeuSaldo = valor > saldo
        excedeuLimite = valor > limite
        excedeuSaque = numeroSaque >= limiteSaque;
        
        if (excedeuSaldo) {
                alert("Operação falhou! Você não tem saldo suficiente!")
        } else if(excedeuLimite){
                alert("Operação falhou! O valor do saque excede o limite!")
        } else if(excedeuSaque){
                alert("Operação falhou! Número máximo de saque excedido!")
        } else if(valor > 0){
            saldo -= valor;
            extrato += `Saque de R$${valor} realizado \n`
                alert(`Saque de R$${valor} realizado`)
        } else {
            alert("Operação falhou! O valor informado é inválido")
        }
    } else if(menu == "e"){
        mensagem = extrato == true ? "Não foram realizadas movimentações" : extrato
        alert(`
        ${mensagem}
        saldo: R$${saldo.toFixed(2)}
        `)
    } else if(menu == "q"){
        alert("Obrigado pela preferência!")
    break
    } else {
        alert("Opção inválida!")
    }
    
}
