import BudgetMeter from "../components/budget/BudgetMeter.jsx";
import BudgetSummary from "../components/budget/BudgetSummary.jsx";

function Budget({ expenses, limit }) {
  return (
    <main className="page budget-page">
      <BudgetMeter expenses={expenses} limit={limit} />
      <BudgetSummary expenses={expenses} limit={limit} />
    </main>
  );
}

export default Budget;
