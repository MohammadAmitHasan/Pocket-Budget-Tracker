// Convert Input field String to number
function getInputNumber(inputFieldName) {
    const inputField = document.getElementById(inputFieldName);
    const inputNumber = parseFloat(inputField.value);
    return inputNumber;
}

// Get the income in number
function getIncome() {
    return getInputNumber('income-input');
}

// Clear income and expenses result fields
function clearIncomeExpensesResults() {
    document.getElementById('total-expense').innerText = '';
    document.getElementById('balance').innerText = '';
}

// clear savings result fields
function clearSavingsResults() {
    document.getElementById('savings-amount').innerText = '';
    document.getElementById('remaining-amount').innerText = '';
}

// Remove error message
function removeError() {
    document.getElementById('error-msg').innerText = '';
    document.getElementById('error-msg').style.display = 'none';
}

// Get error message
function getError(message) {
    document.getElementById('error-msg').innerText = message;
    document.getElementById('error-msg').style.display = 'block';
}

// Validate the field inputs
function numberValidation(inputValue, fieldName) {
    if (isNaN(inputValue) == true) {
        getError('Please provide number value in ' + fieldName);
        return false
    }
    else if (inputValue < 0) {
        getError('Please provide positive value in ' + fieldName);
        return false
    }
    else {
        removeError();
        return true;
    }
}

// Handle Calculate button event
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get input fields
    const foodExpense = getInputNumber('food-expense-input');
    const rentExpense = getInputNumber('rent-expense-input');
    const clotheExpense = getInputNumber('clothes-expense-input');

    // Validation check off all fields
    const incomeValidity = numberValidation(getIncome(), 'Income Field');

    if (incomeValidity) {
        const foodExpenseValidity = numberValidation(foodExpense, 'Food Expense Field');

        if (foodExpenseValidity) {
            const rentExpenseValidity = numberValidation(rentExpense, 'Rent Expense Field');

            if (rentExpenseValidity) {
                const clotheExpenseValidity = numberValidation(clotheExpense, 'Clothes Expense field');

                if (clotheExpenseValidity) {
                    // Calculate total expenses
                    const totalExpenses = foodExpense + rentExpense + clotheExpense;
                    if (getIncome() >= totalExpenses) {
                        const balance = getIncome() - totalExpenses;
                        // Display the total expense and total cost
                        document.getElementById('total-expense').innerText = totalExpenses;
                        document.getElementById('balance').innerText = balance;
                        removeError();
                    }
                    else {
                        getError("You haven't enough money for your expenses");
                        clearIncomeExpensesResults();
                        clearSavingsResults();
                    }
                }
                else {
                    clearIncomeExpensesResults();
                    clearSavingsResults();
                }
            }
            else {
                clearIncomeExpensesResults();
                clearSavingsResults();
            }
        }
        else {
            clearIncomeExpensesResults();
            clearSavingsResults();
        }
    }
    else {
        clearIncomeExpensesResults;
        clearSavingsResults();
    }
});

// Handle Save button event
document.getElementById('save-btn').addEventListener('click', function () {
    const savingsPercentage = getInputNumber('savings-percentage-input');
    const balance = parseFloat(document.getElementById('balance').innerText);

    const savingsPercentageValidation = numberValidation(savingsPercentage, 'Saving Percentage field');

    if (savingsPercentageValidation) {
        const savingsAmount = getIncome() * savingsPercentage * 0.01;
        if (balance >= savingsAmount) {
            const reamingBalance = balance - savingsAmount;
            // display savings amount
            document.getElementById('savings-amount').innerText = savingsAmount;
            document.getElementById('remaining-amount').innerText = reamingBalance;

            // Remove Error message field
            removeError();
        }
        else {
            clearSavingsResults();
            getError("You haven't enough money to save That much");
        }
    }
    else {
        clearSavingsResults();
    }
});