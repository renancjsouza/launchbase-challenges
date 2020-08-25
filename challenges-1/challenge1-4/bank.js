let user = {
    name: 'Renan',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value;
    } else {
        if (transaction.type === 'debit') {
            user.balance = user.balance - transaction.value;
        } else {
            console.log('Invalid transaction type.');
        }
    }
}

function getHigherTransactionByType(typeTransaction) {
    let value = 0;
    let higherTransaction;

    for (let transaction of user.transactions) {
        if (transaction.type === typeTransaction) {
            if (transaction.value > value) {
                value = transaction.value;
                higherTransaction = transaction;
            }
        }
    }

    console.log(higherTransaction);
}

function getAverageTransactionValue() {
    let average = 0;

    for (let transaction of user.transactions) {
        average = average + transaction.value;
    }

    average = average / user.transactions.length;

    console.log(average);
}

function getTransactionsCount() {
    let creditCount = 0
    let debitCount = 0;
    let transactionsCount;

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            creditCount++;
        } else {
            debitCount++;
        }
    }

    transactionsCount = {
        credit: creditCount,
        debit: debitCount
    }

    console.log(transactionsCount);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }