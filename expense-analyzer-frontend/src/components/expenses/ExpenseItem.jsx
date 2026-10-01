import { formatCurrency, formatDate } from "../../utils/formatters";

function ExpenseItem({ expense, index, onDelete }) {
  return (
    <article className="expense-item">
      <div className="timeline-marker">
        <span />
      </div>

      <div className="expense-date">
        <span>
          {formatDate(expense.date)}
        </span>
      </div>

      <div className="expense-details">
        <div className="expense-title-row">
          <h3>{expense.title}</h3>

          <span className="expense-category">
            {expense.category}
          </span>
        </div>

        <p>
          Money moved through your {expense.category.toLowerCase()} zone.
        </p>
      </div>

      <div className="expense-value">
        <strong>
          {formatCurrency(expense.amount)}
        </strong>

        {onDelete && (
          <button
            className="delete-expense"
            onClick={() => onDelete(expense.id)}
            aria-label={`Delete ${expense.title}`}
          >
            ×
          </button>
        )}
      </div>
    </article>
  );
}

export default ExpenseItem;