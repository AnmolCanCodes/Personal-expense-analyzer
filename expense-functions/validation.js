export function isValidDate(date) {
    if (typeof date !== "string") {
        return false;
    }

    // Step 1: Check YYYY-MM-DD format using Regex
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
        return false;
    }

    // Step 2: Verify it is an actual valid date on the calendar
    const [year, month, day] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);

    return (
        dateObj.getFullYear() === year &&
        dateObj.getMonth() === month - 1 &&
        dateObj.getDate() === day
    );
}

export function validateExpense(title, amount, category, date) {
    if (typeof title !== "string" || title.trim() === "") {
        throw new Error("Title cannot be empty.");
    }
    if (typeof amount !== "number" || Number.isNaN(amount)) {
        throw new Error("Amount must be a valid number.");
    }
    if (amount <= 0) {
        throw new Error("Amount must be greater than 0.");
    }
    if (typeof category !== "string" || category.trim() === "") {
        throw new Error("Category cannot be empty.");
    }
    if (!isValidDate(date)) {
        throw new Error("Date must be a valid date in YYYY-MM-DD format.");
    }

    return true;
}

export function isValidExpense(expense) {
    if (!expense || typeof expense !== "object") {
        return false;
    }

    try {
        validateExpense(
            expense.title,
            expense.amount,
            expense.category,
            expense.date
        );
        return true;
    } catch {
        return false;
    }
}