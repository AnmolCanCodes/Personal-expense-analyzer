import {
  calculateTotal,
  calculateAverage,
  getHighestExpense,
} from "../../utils/calculations";

import { formatCurrency } from "../../utils/formatters";

function BudgetSummary({ expenses, limit }) {
  const total = calculateTotal(expenses);
  const average = calculateAverage(expenses);
  const highest = getHighestExpense(expenses);

  const timestamps = expenses
    .map((expense) => new Date(`${expense.date}T00:00:00`).getTime())
    .filter((time) => !Number.isNaN(time));

  const spanDays =
    timestamps.length === 0
      ? 1
      : Math.max(
          1,
          Math.round(
            (Math.max(...timestamps) - Math.min(...timestamps)) / 86400000
          ) + 1
        );

  const dailyAverage = total / spanDays;
  const projected = dailyAverage * 30;

  return (
    <section className="budget-summary">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE NUMBERS</p>
          <h2>Your financial coordinates.</h2>
        </div>
      </div>

      <div className="budget-stat-grid">
        <article>
          <span>MONTHLY LIMIT</span>
          <strong>{formatCurrency(limit)}</strong>
        </article>

        <article>
          <span>AVERAGE MOVE</span>
          <strong>{formatCurrency(average)}</strong>
        </article>

        <article>
          <span>LARGEST MOVE</span>
          <strong>
            {highest
              ? formatCurrency(highest.amount)
              : "₹0"}
          </strong>
        </article>

        <article>
          <span>DAILY PACE</span>
          <strong>{formatCurrency(dailyAverage)}</strong>
        </article>
      </div>

      <div className="budget-projection">
        <div>
          <span>MONTHLY PROJECTION</span>
          <strong>{formatCurrency(projected)}</strong>
        </div>

        <p>
          Based on your current spending pace of{" "}
          {formatCurrency(dailyAverage)} per day.
        </p>
      </div>
    </section>
  );
}

export default BudgetSummary;