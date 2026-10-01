const NAV_ITEMS = [
  { id: "overview", label: "Atlas" },
  { id: "timeline", label: "Trail" },
  { id: "budget", label: "Fuel" },
  { id: "categories", label: "Zones" },
  { id: "insights", label: "Weather" },
];

function Sidebar({ view, onNavigate }) {
  return (
    <aside className="sidebar">
      <p className="sidebar-kicker">NAVIGATION</p>

      <nav>
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${view === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-index">0{index + 1}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <p className="sidebar-note">
        Five maps. One sky of spending.
      </p>
    </aside>
  );
}

export default Sidebar;
