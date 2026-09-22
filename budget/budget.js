import { calculateTotal } from "../expense-functions/analytics.js";
import { addExpense, deleteExpensem } from "../expense-functions/expenseOperations.js";

export class Budget {
    constructor(limit, expenses = []) {
        if (typeof limit !== "number" || limit <= 0 || Number.isNaN(limit)) {
            throw new Error("Budget limit must be a valid number greater than 0.");
        }
        this.limit = limit;
        this.expenses = expenses;
    }

    addExpense(title, amount, category, date) {
        // Corrected: pass this.expenses array followed by expense details
        return addExpense(this.expenses, title, amount, category, date);
    }

    deleteExpense(id) {
        return deleteExpense(this.expenses, id);
    }

    getTotal() {
        return calculateTotal(this.expenses);
    }

    getRemaining() {
        return this.limit - this.getTotal();
    }

    isOverBudget() {
        return this.getTotal() > this.limit;
    }

    getStatus() {
        const total = this.getTotal();
        const remaining = this.getRemaining();
        const percentageUsed = Number(((total / this.limit) * 100).toFixed(2));

        return {
            limit: this.limit,
            total,
            remaining,
            percentageUsed,
            isOverBudget: total > this.limit
        };
    }
}