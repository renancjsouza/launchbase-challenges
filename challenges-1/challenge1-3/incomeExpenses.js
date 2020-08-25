const users = [
    {
        name: 'Salvio',
        incomes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        incomes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        incomes: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function calculateBalance(incomes, expenses) {
    let totalIncomes, totalExpenses, balance = 0;

    totalIncomes = sumNumbers(incomes);
    totalExpenses = sumNumbers(expenses);
    
    balance = totalIncomes - totalExpenses;

    return balance;
}

function sumNumbers(numbers) {
    let total = 0;

    for (let x = 0; x < numbers.length; x++) {
        total = total + numbers[x];
    }

    return total;
}

for (let x = 0; x < users.length; x++) {
    let balance = calculateBalance(users[x].incomes, users[x].expenses);

    if (balance > 0) {
        console.log(`${users[x].name} has a positive balance of $${balance}`);
    } else {
        console.log(`${users[x].name} has a negative balance of $${balance}`);     
    }
}