import { validateExpense } from "./validaton.js"; // Note: Fixed import spelling if needed

export function addExpense(expenses, title, amount, category, date) {
   
    validateExpense(title, amount, category, date);

   
    const newId = expenses.length === 0 
        ? 1 
        : Math.max(...expenses.map(expense => expense.id)) + 1;

   
    const newExpense = {
        id: newId,
        title: title.trim(),
        amount,
        category: category.trim(),
        date
    };

   
    expenses.push(newExpense);
    return newExpense;
}

export function deleteExpense(expenses, id) {
    const index = expenses.findIndex(expense => expense.id === id);
    
    if (index === -1) {
        throw new Error(`Expense with ID ${id} does not exist.`);
    }

  
    return expenses.splice(index, 1)[0];
}

export function findExpense(expenses, id) {
    return expenses.find(expense => expense.id === id);
}

export function filterbyCategory(expenses, category) {
    if (typeof category !== "string") return [];
    
    const targetCategory = category.trim().toLocaleLowerCase();
    return expenses.filter(
        expense => expense.category.toLocaleLowerCase() === targetCategory
    );
}