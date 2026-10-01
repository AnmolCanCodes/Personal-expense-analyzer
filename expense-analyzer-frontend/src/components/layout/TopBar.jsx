function TopBar({ view }) {
  const labels = {
    overview: "Atlas",
    timeline: "Trail",
    budget: "Fuel",
    categories: "Zones",
    insights: "Weather",
  };

  return (
    <header className="top-bar">
      <div className="top-bar-brand">
        <span className="brand-mark" aria-hidden="true" />
        <div>
          <p className="brand">MONEY ATLAS</p>
          <p className="brand-sub">where rupees orbit</p>
        </div>
      </div>

      <p className="top-bar-view">{labels[view] || "Atlas"}</p>

      <p className="date">SEPTEMBER 2026</p>
    </header>
  );
}

export default TopBar;
