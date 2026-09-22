import { isValidExpense } from "./validation.js";

export function calculateTotal(expenses){
    return expenses.reduce((total,expense)=> total + expense.amount,0);
}

export function calculateAverage(expenses){
    if(expenses.length===0){
        return 0
    };
    return calculateTotal(expenses)/expenses.length;
}

export function getHighestExpense(expenses){
    if (expenses.length===0){
        return undefined;
    }

    return expenses.reduce((highest,current)=>{
        return current.amount > highest.amount ? current : highest;
    });
}

export function getExpensesSortedByAmount(expenses, order = "desc") {
    // 1. Copy array with spread operator
    // 2. Sort copy
    return [...expenses].sort((a, b) => {
        return order === "asc" ? a.amount - b.amount : b.amount - a.amount;
    });
}

// Phase 10: Check if at least one expense exceeds a threshold (some)
export function hasLargeExpense(expenses, threshold = 5000) {
    return expenses.some(expense => expense.amount >= threshold);
}

// Phase 10: Check if all expenses are valid (every)
export function areAllExpensesValid(expenses) {
    if (expenses.length === 0) return true;
    return expenses.every(expense => isValidExpense(expense));
}

