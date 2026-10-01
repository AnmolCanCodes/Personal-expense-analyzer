import { formatCurrency } from "../../utils/formatters";

function InsightCard({
  eyebrow,
  title,
  description,
  value,
  type = "default",
}) {
  return (
    <article className={`insight-card insight-${type}`}>
      <div className="insight-card-top">
        <span className="eyebrow">
          {eyebrow}
        </span>

        <span className="insight-symbol">
          {type === "warning"
            ? "!"
            : type === "positive"
              ? "↗"
              : "✦"}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {value !== undefined && (
        <strong className="insight-value">
          {typeof value === "number"
            ? formatCurrency(value)
            : value}
        </strong>
      )}
    </article>
  );
}

export default InsightCard;