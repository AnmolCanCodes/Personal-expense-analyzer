import { useMemo } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseTimeline({
  expenses,
  onDelete,
  activeCategory,
}) {
  const filteredExpenses = useMemo(() => {
    if (!activeCategory) {
      return expenses;
    }

    return expenses.filter(
      (expense) => expense.category === activeCategory
    );
  }, [expenses, activeCategory]);

  const sortedExpenses = [...filteredExpenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="expense-timeline">
      <div className="section-heading timeline-heading">
        <div>
          <p className="eyebrow">MONEY TRAIL</p>

          <h2>
            {activeCategory
              ? `${activeCategory} movement`
              : "Everywhere it went."}
          </h2>
        </div>

        <span className="section-count">
          {sortedExpenses.length} movements
        </span>
      </div>

      {sortedExpenses.length === 0 ? (
        <div className="empty-state">
          <span>○</span>
          <h3>No movement here.</h3>
          <p>
            Try another category or add a new expense.
          </p>
        </div>
      ) : (
        <div className="timeline-list">
          {sortedExpenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              index={index}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ExpenseTimeline;