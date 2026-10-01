import { formatCurrency, formatDate } from "../../utils/formatters";

function RecentExpenses({ expenses, limit = 5 }) {
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  return (
    <section className="recent-expenses">
      <div className="section-heading">
        <div>
          <p className="eyebrow">RECENT MOVEMENT</p>
          <h2>Your latest trails.</h2>
        </div>

        <span className="section-count">
          {recentExpenses.length} entries
        </span>
      </div>

      <div className="recent-list">
        {recentExpenses.map((expense, index) => (
          <article
            className="recent-expense"
            key={expense.id}
          >
            <div className="recent-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="recent-main">
              <h3>{expense.title}</h3>

              <div className="recent-meta">
                <span>{expense.category}</span>
                <span>•</span>
                <span>{formatDate(expense.date)}</span>
              </div>
            </div>

            <strong className="recent-amount">
              {formatCurrency(expense.amount)}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentExpenses;