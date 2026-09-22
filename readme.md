# Expense Project

This project is a simple personal expense tracker built with JavaScript. It helps a person or family keep track of where money is being spent, sort expenses by category, check totals, and see whether spending is staying within a budget.

## What the app does

- Add new expenses
- Delete existing expenses
- Find an expense by ID
- Filter expenses by category
- Calculate total and average spending
- Find the highest expense
- Show monthly summaries
- Check if an expense is valid before saving it
- Compare spending with a budget limit

In simple terms: this app works like a mini spending dashboard.

## Main project files

- `main.js` – runs the app and shows demo output
- `data/expense.js` – sample expense data used by the project
- `expense-functions/expenseOperations.js` – add, delete, search, and filter logic
- `expense-functions/analytics.js` – totals, averages, sorting, and checks
- `expense-functions/validation.js` – input validation rules
- `budget/budget.js` – budget class for limit and remaining balance
- `storage/jsonStorage.js` – save and restore expenses as JSON

## How to run

1. Open the project folder in a terminal.
2. Run:

```bash
npm start
```

Or directly:

```bash
node main.js
```

## Why this project is useful

This is a practical beginner-friendly project because it combines:

- JavaScript arrays and objects
- Functions and modular code
- Data validation
- Budget logic
- Simple data storage using JSON

It is a good example of how a real-world app can start as a small project and grow into a more useful tool.

## Notes

This project is designed for learning and demonstration. It is easy to understand, easy to extend, and can be improved with features like:

- user input from the terminal
- a database
- monthly charts
- category-wise reports
- login and saving personal data
