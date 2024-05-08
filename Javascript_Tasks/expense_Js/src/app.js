// User entity
const user = {
  name: 'nupoor',
  email: 'nupoork@gmail.com'
};

// Expense entity
class Expense {
  constructor(amount, description, category, paymentMode) {
    this.amount = amount;
    this.description = description;
    this.category = category;
    this.paymentMode = paymentMode;
    this.date = new Date();
  }
}

// Category entity
const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other'];

// Mode of Payment entity
const paymentModes = ['Cash', 'Card', 'Online'];

// Expense list
const expenseList = [];

// DOM elements
let expenseForm, expenseListElement, userNameElement, currentDateElement, currentTimeElement;

document.addEventListener('DOMContentLoaded', function() {
  expenseForm = document.getElementById('expenseForm');
  expenseListElement = document.getElementById('expenseList');
  userNameElement = document.getElementById('userName');
  currentDateElement = document.getElementById('currentDate');
  currentTimeElement = document.getElementById('currentTime');

  // Display user name, date, and time
  userNameElement.textContent = user.name;
  currentDateElement.textContent = new Date().toLocaleDateString();
  currentTimeElement.textContent = new Date().toLocaleTimeString();

  // Add event listener to the form
  expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const paymentMode = document.getElementById('paymentMode').value;

    const expense = new Expense(amount, description, category, paymentMode);
    expenseList.push(expense);

    renderExpenseList();

    // Clear form inputs
    expenseForm.reset();
  });
});

// Function to render the expense list
function renderExpenseList() {
  expenseListElement.innerHTML = '';

  expenseList.forEach(expense => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `
      <strong>Amount:</strong> $${expense.amount}<br>
      <strong>Description:</strong> ${expense.description}<br>
      <strong>Category:</strong> ${expense.category}<br>
      <strong>Payment Mode:</strong> ${expense.paymentMode}<br>
    <strong>Date:</strong> ${expense.date.toLocaleDateString()} ${expense.date.toLocaleTimeString()}`;
    expenseListElement.appendChild(listItem);
  });
}