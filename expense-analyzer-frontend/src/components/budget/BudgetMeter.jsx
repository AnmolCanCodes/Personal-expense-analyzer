import { calculateTotal } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

function BudgetMeter({ expenses, limit }) {
  const spent = calculateTotal(expenses);

  const percentage =
    limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;

  const remaining = Math.max(limit - spent, 0);

  const isOverBudget = spent > limit;

  return (
    <section className="budget-meter">
      <div className="budget-header">
        <div>
          <p className="eyebrow">MONTHLY FUEL</p>
          <h2>Budget pressure</h2>
        </div>

        <strong>
          {Math.round(percentage)}%
        </strong>
      </div>

      <div className="meter">
        <div
          className="meter-fill"
          style={{ width: `${percentage}%` }}
        />

        <div className="meter-markers">
          <span>₹0</span>
          <span>{formatCurrency(limit)}</span>
        </div>
      </div>

      <div className="budget-reading">
        <div>
          <span>SPENT</span>
          <strong>{formatCurrency(spent)}</strong>
        </div>

        <div>
          <span>{isOverBudget ? "OVER" : "REMAINING"}</span>
          <strong>
            {formatCurrency(isOverBudget ? spent - limit : remaining)}
          </strong>
        </div>
      </div>

      <p className="budget-status">
        {isOverBudget
          ? "Your spending crossed the monthly boundary."
          : "Your spending is still inside the boundary."}
      </p>
    </section>
  );
}

export default BudgetMeter;