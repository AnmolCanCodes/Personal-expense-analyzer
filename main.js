import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { expenses } from "./data/expense.js";
import {
  addExpense,
  deleteExpense,
  findExpense,
  filterbyCategory
} from "./expense-functions/expenseOperations.js";

import {
  calculateTotal,
  calculateAverage,
  getHighestExpense,
  getExpensesSortedByAmount,
  hasLargeExpense,
  areAllExpensesValid
} from "./expense-functions/analytics.js";

import { monthlySummary } from "./expense-functions/monthlySummary.js";
import { Budget } from "./budget/budget.js";

const rl = readline.createInterface({ input, output });

async function addExpenseFromUser() {
  const title = await rl.question("Enter expense title: ");
  const amount = Number(await rl.question("Enter amount: "));
  const category = await rl.question("Enter category: ");
  const date = await rl.question("Enter date (YYYY-MM-DD): ");

  try {
    const newExpense = addExpense(expenses, title, amount, category, date);
    console.log("Expense added:", newExpense);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

async function searchExpense() {
  const id = Number(await rl.question("Enter expense ID: "));
  const found = findExpense(expenses, id);
  console.log(found ? found : "Expense not found");
}

async function filterExpenses() {
  const category = await rl.question("Enter category to filter: ");
  const result = filterbyCategory(expenses, category);
  console.log(result);
}

async function showAnalytics() {
  console.log("Total:", calculateTotal(expenses));
  console.log("Average:", calculateAverage(expenses));
  console.log("Highest expense:", getHighestExpense(expenses));
  console.log("Monthly summary:", monthlySummary(expenses));
  console.log("Has large expense:", hasLargeExpense(expenses, 5000));
  console.log("All valid:", areAllExpensesValid(expenses));
}

while (true) {
  console.log("\n1. Add Expense");
  console.log("2. Search Expense");
  console.log("3. Filter By Category");
  console.log("4. Show Analytics");
  console.log("5. Delete Expense");
  console.log("6. Budget Status");
  console.log("7. Exit");

  const choice = await rl.question("Choose an option: ");

  if (choice === "1") {
    await addExpenseFromUser();
  } else if (choice === "2") {
    await searchExpense();
  } else if (choice === "3") {
    await filterExpenses();
  } else if (choice === "4") {
    await showAnalytics();
  } else if (choice === "5") {
    const id = Number(await rl.question("Enter ID to delete: "));
    try {
      const deleted = deleteExpense(expenses, id);
      console.log("Deleted:", deleted);
    } catch (error) {
      console.log("Error:", error.message);
    }
  } else if (choice === "6") {
    const budget = new Budget(10000, expenses);
    console.log(budget.getStatus());
  } else if (choice === "7") {
    break;
  } else {
    console.log("Invalid option");
  }
}

rl.close();