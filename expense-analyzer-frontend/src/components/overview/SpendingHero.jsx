import { calculateTotal, calculateAverage } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

function SpendingHero({ expenses }) {
  const total = calculateTotal(expenses);
  const average = calculateAverage(expenses);
  const worldCount = new Set(expenses.map((expense) => expense.category)).size;
  const transactionLabel =
    expenses.length === 1 ? "transaction" : "transactions";
  const worldLabel = worldCount === 1 ? "world" : "worlds";

  return (
    <section className="spending-hero">
      <div className="hero-copy">
        <p className="eyebrow">YOUR MONEY TRAVELED</p>

        <h1 className="hero-total">
          {formatCurrency(total)}
        </h1>

        <p className="hero-description">
          Across{" "}
          <strong>{expenses.length}</strong>{" "}
          {transactionLabel}, your money moved through{" "}
          <strong>{worldCount}</strong> different {worldLabel}.
        </p>
      </div>

      <div className="hero-meta">
        <div>
          <span>AVG. TRANSACTION</span>
          <strong>{formatCurrency(average)}</strong>
        </div>

        <div>
          <span>PERIOD</span>
          <strong>SEP 2026</strong>
        </div>
      </div>

      <div className="hero-line">
        <span />
      </div>
    </section>
  );
}

export default SpendingHero;