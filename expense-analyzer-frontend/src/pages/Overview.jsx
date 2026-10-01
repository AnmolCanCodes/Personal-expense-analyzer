import SpendingHero from "../components/overview/SpendingHero.jsx";
import SpendingConstellation from "../components/overview/SpendingConstellation.jsx";
import CategoryStrip from "../components/overview/CategoryStrip.jsx";
import RecentExpenses from "../components/overview/RecentExpenses.jsx";
import AddExpense from "../components/expenses/AddExpense.jsx";

function Overview({
  expenses,
  activeCategory,
  onCategorySelect,
  onAdd,
}) {
  const visibleExpenses = activeCategory
    ? expenses.filter((expense) => expense.category === activeCategory)
    : expenses;

  return (
    <main className="page overview">
      <SpendingHero expenses={visibleExpenses} />

      <CategoryStrip
        expenses={expenses}
        activeCategory={activeCategory}
        onCategorySelect={onCategorySelect}
      />

      <SpendingConstellation
        expenses={expenses}
        onCategorySelect={onCategorySelect}
      />

      <RecentExpenses expenses={visibleExpenses} />

      <AddExpense onAdd={onAdd} />
    </main>
  );
}

export default Overview;
