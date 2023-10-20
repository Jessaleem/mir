var accounts = [];
function openAccount(number, balance) {
    var openTransaction = { number: number, balance: balance };
    accounts.push(openTransaction);
}
function getBalance(number) {
    var account = accounts.find(function (account) { return account.number === number; });
    if (!account)
        throw new Error("La cuenta no se encontró");
    return account.balance;
}
function deposit(number, amount) {
    var account = accounts.find(function (a) { return a.number === number; });
    if (!account)
        throw new Error("La cuenta no se encontró");
    account.balance += amount;
}
function withdraw(number, amount) {
    var account = accounts.find(function (account) { return account.number === number; });
    if (!account)
        throw new Error("La cuenta no se encontró");
    if (account.balance - amount < 0)
        throw new Error("Fondos insuficientes");
    account.balance -= amount;
}
openAccount("111", 0);
deposit("111", 1000);
console.log(getBalance("111"));
withdraw("111", 500);
console.log(getBalance("111"));
