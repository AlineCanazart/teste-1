function BankAccount(numeroConta, tipoConta, saldoConta, titularConta){
   this.numero =  numeroConta;
   this.tipo = tipoConta;
   this.saldo =  saldoConta;
   this.titular =  titularConta;
}

let Aline = new BankAccount("00001", "Conta Corrente", 1234.56, "Aline Canazart Batista");

console.log(Aline);



