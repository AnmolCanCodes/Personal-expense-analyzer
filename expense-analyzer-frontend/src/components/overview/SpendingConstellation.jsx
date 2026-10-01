import { getCategoryTotals } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

function SpendingConstellation({ expenses, onCategorySelect }) {
  const categoryTotals = getCategoryTotals(expenses);

  const categories = Object.entries(categoryTotals).sort(
    ([, amountA], [, amountB]) => amountB - amountA
  );

  const maxAmount =
    categories.length > 0
      ? Math.max(...categories.map(([, amount]) => amount))
      : 0;

  return (
    <section className="constellation-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE SPENDING CONSTELLATION</p>
          <h2>Where your money gathers.</h2>
        </div>

        <span className="section-count">
          {categories.length} zones
        </span>
      </div>

      <div className="constellation">
        <div className="constellation-orbit orbit-one" />
        <div className="constellation-orbit orbit-two" />

        {categories.map(([category, amount], index) => {
          const size = 90 + (maxAmount > 0 ? (amount / maxAmount) * 130 : 0);

          return (
            <button
              key={category}
              className={`planet planet-${index}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
              onClick={() => onCategorySelect?.(category)}
              title={`Explore ${category}`}
            >
              <span className="planet-dot" />

              <span className="planet-content">
                <small>{category}</small>
                <strong>{formatCurrency(amount)}</strong>
              </span>
            </button>
          );
        })}

        <div className="constellation-core">
          <span>SPEND</span>
          <strong>∞</strong>
        </div>
      </div>

      <p className="constellation-note">
        The larger the orbit, the more money passed through it.
      </p>
    </section>
  );
}

export default SpendingConstellation;