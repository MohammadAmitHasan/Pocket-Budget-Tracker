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

// Validate the field inputs
function numberValidation(inputValue, fieldName) {
    if (isNaN(inputValue) == true) {
        document.getElementById('error-msg1').innerText = 'Please provide number value in ' + fieldName;
        document.getElementById('error-msg1').style.display = 'block';
        return false
    }
    else if (inputValue < 0) {
        document.getElementById('error-msg1').innerText = 'Please provide positive value in ' + fieldName;
        document.getElementById('error-msg1').style.display = 'block';
        return false
    }
    else {
        document.getElementById('error-msg1').innerText = '';
        document.getElementById('error-msg1').style.display = 'none';
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

                    const totalExpenses = foodExpense + rentExpense + clotheExpense;
                    const balance = getIncome() - totalExpenses;

                    // Display the total expense and total cost
                    document.getElementById('total-expense').innerText = totalExpenses;
                    document.getElementById('balance').innerText = balance;
                }
            }
        }
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
            document.getElementById('error-msg1').style.display = 'none';
        }
        else {
            document.getElementById('error-msg1').innerText = "You haven't enough money to save That much";
            document.getElementById('error-msg1').style.display = 'block';
        }
    }
});