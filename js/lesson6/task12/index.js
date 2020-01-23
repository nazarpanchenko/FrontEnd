function withdraw(clients, balances, client, amount) {
    let clientID;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) clientID = i;
    }

    return amount > balances[clientID] ? -1 : balances[i] - amount;
}

withdraw(['Mark', 'Peter', 'Anthon', 'Carl'], [1250, 1000, 650, 880], 'Peter', 2000);