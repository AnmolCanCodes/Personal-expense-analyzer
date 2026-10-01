export function calculateTotal(expenses) {
  return expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

export function calculateAverage(expenses) {
  if (!expenses.length) {
    return 0;
  }

  return calculateTotal(expenses) / expenses.length;
}

export function getHighestExpense(expenses) {
  if (!expenses.length) {
    return null;
  }

  return expenses.reduce((highest, expense) =>
    expense.amount > highest.amount ? expense : highest
  );
}

export function getCategoryTotals(expenses) {
  return expenses.reduce((totals, expense) => {
    const category = expense.category || "Other";
    totals[category] = (totals[category] || 0) + Number(expense.amount || 0);
    return totals;
  }, {});
}

export function getMonthlyTotals(expenses) {
  return expenses.reduce((totals, expense) => {
    const month = String(expense.date || "").slice(0, 7);

    if (!month) {
      return totals;
    }

    totals[month] = (totals[month] || 0) + Number(expense.amount || 0);
    return totals;
  }, {});
}

export function getTopCategory(expenses) {
  const totals = getCategoryTotals(expenses);
  const entries = Object.entries(totals);

  if (!entries.length) {
    return null;
  }

  return entries.reduce((top, current) =>
    current[1] > top[1] ? current : top
  );
}
