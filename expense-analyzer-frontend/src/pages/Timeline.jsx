import ExpenseTimeline from "../components/expenses/ExpenseTimeline.jsx";
import AddExpense from "../components/expenses/AddExpense.jsx";

function Timeline({ expenses, activeCategory, onDelete, onAdd }) {
  return (
    <main className="page timeline-page">
      <ExpenseTimeline
        expenses={expenses}
        activeCategory={activeCategory}
        onDelete={onDelete}
      />

      <AddExpense onAdd={onAdd} />
    </main>
  );
}

export default Timeline;
