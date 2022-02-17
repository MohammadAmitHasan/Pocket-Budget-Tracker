// Handle Calculate button event
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get input fields

    const foodExpense = getInputNumber('food-expense-input');
    const rentExpense = getInputNumber('rent-expense-input');
    const clotheExpense = getInputNumber('clothes-expense-input');

    const totalExpenses = foodExpense + rentExpense + clotheExpense;
    const balance = getIncome() - totalExpenses;

    // Display the total expense and total cost
    document.getElementById('total-expense').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;
});

// Handle Save button event
document.getElementById('save-btn').addEventListener('click', function () {
    const savingsPercentage = getInputNumber('savings-percentage-input');
    const balance = parseFloat(document.getElementById('balance').innerText);

    const savingsAmount = getIncome() * savingsPercentage * 0.01;
    const reamingBalance = balance - savingsAmount;

    // display savings amount
    document.getElementById('savings-amount').innerText = savingsAmount;
    document.getElementById('remaining-amount').innerText = reamingBalance;
});

// Get the income in number
function getIncome() {
    return getInputNumber('income-input');
}

// Convert Input field String to number
function getInputNumber(inputFieldName) {
    const inputField = document.getElementById(inputFieldName);
    const inputNumber = parseFloat(inputField.value);
    return inputNumber;
}