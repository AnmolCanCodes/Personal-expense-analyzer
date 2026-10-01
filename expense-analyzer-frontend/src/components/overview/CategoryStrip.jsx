import { getCategoryTotals } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

function CategoryStrip({ expenses, activeCategory, onCategorySelect }) {
  const categoryTotals = getCategoryTotals(expenses);

  const categories = Object.entries(categoryTotals).sort(
    ([, amountA], [, amountB]) => amountB - amountA
  );

  return (
    <section className="category-strip">
      <div className="category-strip-header">
        <p className="eyebrow">CATEGORIES</p>

        {activeCategory && (
          <button
            className="clear-filter"
            onClick={() => onCategorySelect(null)}
          >
            CLEAR ×
          </button>
        )}
      </div>

      <div className="category-list">
        {categories.map(([category, amount], index) => (
          <button
            key={category}
            className={`category-chip ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => onCategorySelect(category)}
          >
            <span className="category-index">
              0{index + 1}
            </span>

            <span className="category-name">
              {category}
            </span>

            <span className="category-amount">
              {formatCurrency(amount)}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryStrip;