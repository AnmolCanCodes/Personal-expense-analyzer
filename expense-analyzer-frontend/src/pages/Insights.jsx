import MonthlyChart from "../components/insights/MonthlyChart.jsx";
import InsightCard from "../components/insights/InsightCard.jsx";
import { formatDate } from "../utils/formatters.js";
import {
  calculateTotal,
  getHighestExpense,
  getTopCategory,
} from "../utils/calculations.js";

function Insights({ expenses }) {
  const total = calculateTotal(expenses);
  const highest = getHighestExpense(expenses);
  const topCategory = getTopCategory(expenses);

  return (
    <main className="page insights-page">
      <header className="page-intro">
        <p className="eyebrow">MONEY WEATHER</p>
        <h2>Signals from the sky of spend.</h2>
      </header>

      <div className="insight-grid">
        <InsightCard
          eyebrow="VOLUME"
          title="Movements logged"
          description="Every recorded trail across the atlas."
          value={`${expenses.length} entries`}
          type="default"
        />

        <InsightCard
          eyebrow="DOMINANT ZONE"
          title={topCategory ? topCategory[0] : "No zones yet"}
          description="The category that pulled the most gravity."
          value={topCategory ? topCategory[1] : 0}
          type="positive"
        />

        <InsightCard
          eyebrow="LARGEST MOVE"
          title={highest ? highest.title : "Quiet skies"}
          description={
            highest
              ? `A ${highest.category.toLowerCase()} flare on ${formatDate(highest.date)}.`
              : "Add a movement to see the peak."
          }
          value={highest ? highest.amount : 0}
          type="warning"
        />

        <InsightCard
          eyebrow="ATLAS TOTAL"
          title="All visible spend"
          description="Sum of every rupee currently on the map."
          value={total}
        />
      </div>

      <MonthlyChart expenses={expenses} />
    </main>
  );
}

export default Insights;
