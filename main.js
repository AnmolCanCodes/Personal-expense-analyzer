import { expenses } from "./data/expense,.js";
import { addExpense,deleteExpense,findExpense,filterbyCategory } from "./expense-functions/expenseOperations";
import { calculateTotal,calculateAverage,getHightestExpense,getExpensesSortedByAmount,hasLargeExpense,areAllExpensesValid } from "./expense-functions/analytics";
import { monthlySummary } from "./expense-functions/monthlySummary";
import { expenseToJson,expensesFromJSON } from "./storage/jsonStorage";
import { Budget } from "./budget/budget";

function displayExpenses(expenseList) {
    if (!expenseList || expenseList.length === 0) {
        console.log("No expenses found.\n");
        return;
    }
    console.table(
        expenseList.map(({ id, title, amount, category, date }) => ({
            ID: id,
            Title: title,
            Amount: `₹${amount}`,
            Category: category,
            Date: date
        }))
    );
}

// Clone initial expenses to avoid unexpected mutations during tests

console.log("=========================================");
console.log("       PERSONAL EXPENSE ANALYZER         ");
console.log("=========================================");

// Phase 1: Initial Data State
console.log("\n--- 1. INITIAL EXPENSES ---");
displayExpenses(expenses);

// Phase 2 & 7: Adding Expenses & Validation
console.log("--- 2. ADDING NEW EXPENSES ---");
try {
    const added1 = addExpense(expenses, "Streaming Service", 499, "Entertainment", "2026-09-22");
    console.log(`Successfully added: ${added1.title} (₹${added1.amount})`);

    const added2 = addExpense(expenses, "Coffee & Snacks", 220, "Food", "2026-09-23");
    console.log(`Successfully added: ${added2.title} (₹${added2.amount})`);
} catch (error) {
    console.error("Failed to add expense:", error.message);
}

// Deliberately trigger validation error to test robustness
try {
    console.log("\nTesting validation with invalid expense...");
    addExpense(expenses, "", -100, "Bad Data", "invalid-date");
} catch (error) {
    console.log(`Validation caught expected error: "${error.message}"`);
}

// Phase 3: Filtering & Searching
console.log("\n--- 3. SEARCH & FILTER ---");
const searchedId = 1;
const found = findExpense(expenses, searchedId);
console.log(`Find ID ${searchedId}:`, found ? `${found.title} (₹${found.amount})` : "Not found");

const foodExpenses = filterbyCategory(expenses, "Food");
console.log(`\nFiltered Category ['Food'] (${foodExpenses.length} items):`);
displayExpenses(foodExpenses);

// Phase 4 & 5: Analytics & Sorting
console.log("--- 4. ANALYTICS & AGGREGATION ---");
console.log(`Total Spent:          ₹${calculateTotal(expenses)}`);
console.log(`Average Expense:      ₹${calculateAverage(expenses).toFixed(2)}`);

const highest = getHighestExpense(expenses);
if (highest) {
    console.log(`Highest Single Expense: ${highest.title} (₹${highest.amount})`);
}

console.log("\nExpenses Sorted by Amount (Descending):");
displayExpenses(getExpensesSortedByAmount(expenses, "desc"));

// Phase 6 & 10: Summary & Boolean Checks
console.log("--- 5. MONTHLY SUMMARY & AUDIT ---");
console.log("Monthly Breakdown:", monthlySummary(expenses));
console.log(`Has expense ≥ ₹5,000? ${hasLargeExpense(expenses, 5000)}`);
console.log(`Are all expenses valid? ${areAllExpensesValid(expenses)}`);

// Phase 2: Deleting an Expense
console.log("\n--- 6. DELETE EXPENSE ---");
try {
    const deletedId = 2;
    const removed = deleteExpense(expenses, deletedId);
    console.log(`Deleted ID ${deletedId}: ${removed.title}`);
} catch (error) {
    console.error("Delete failed:", error.message);
}

// Phase 11: JSON Storage Simulation
console.log("\n--- 7. JSON STORAGE SIMULATION ---");
const jsonString = expenseToJson(expenses);
console.log("Serialized JSON String (sample):", jsonString.slice(0, 100) + "...");

const restoredExpenses = jsonToExpenses(jsonString);
console.log(`Restored ${restoredExpenses.length} expenses successfully from JSON.`);

// Phase 13: Budget Class Operations
console.log("\n--- 8. BUDGET MANAGEMENT (OOP) ---");
const myBudget = new Budget(10000, expenses);

console.log("Budget Status:", myBudget.getStatus());
console.log(`Remaining Balance: ₹${myBudget.getRemaining()}`);

console.log("\n=========================================");
console.log("      APPLICATION RUN COMPLETED          ");
console.log("=========================================");