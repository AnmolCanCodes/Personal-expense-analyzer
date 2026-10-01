import { getMonthlyTotals } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

function MonthlyChart({ expenses }) {
  const monthlyTotals = getMonthlyTotals(expenses);

  const months = Object.entries(monthlyTotals).sort(
    ([monthA], [monthB]) =>
      monthA.localeCompare(monthB)
  );

  const maxAmount =
    months.length > 0
      ? Math.max(...months.map(([, amount]) => amount))
      : 0;

  function formatMonth(month) {
    const date = new Date(`${month}-01T00:00:00`);

    return new Intl.DateTimeFormat("en-IN", {
      month: "short",
    }).format(date);
  }

  return (
    <section className="monthly-chart">
      <div className="section-heading">
        <div>
          <p className="eyebrow">MONEY WEATHER</p>
          <h2>How the months moved.</h2>
        </div>
      </div>

      {months.length === 0 ? (
        <div className="empty-state">
          No monthly data yet.
        </div>
      ) : (
        <div className="chart">
          {months.map(([month, amount]) => {
            const height =
              maxAmount > 0
                ? (amount / maxAmount) * 100
                : 0;

            return (
              <div
                className="chart-column"
                key={month}
              >
                <div className="chart-value">
                  {formatCurrency(amount)}
                </div>

                <div className="bar-track">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>

                <span className="chart-label">
                  {formatMonth(month)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MonthlyChart;