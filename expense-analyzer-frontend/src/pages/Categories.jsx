import CategoryStrip from "../components/overview/CategoryStrip.jsx";
import ExpenseTimeline from "../components/expenses/ExpenseTimeline.jsx";

function Categories({
  expenses,
  activeCategory,
  onCategorySelect,
  onDelete,
}) {
  return (
    <main className="page categories-page">
      <header className="page-intro">
        <p className="eyebrow">ZONES</p>
        <h2>Pick a world. Follow the rupees.</h2>
      </header>

      <CategoryStrip
        expenses={expenses}
        activeCategory={activeCategory}
        onCategorySelect={onCategorySelect}
      />

      <ExpenseTimeline
        expenses={expenses}
        activeCategory={activeCategory}
        onDelete={onDelete}
      />
    </main>
  );
}

export default Categories;
