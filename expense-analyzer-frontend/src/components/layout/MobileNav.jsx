const NAV_ITEMS = [
  { id: "overview", label: "Atlas" },
  { id: "timeline", label: "Trail" },
  { id: "budget", label: "Fuel" },
  { id: "categories", label: "Zones" },
  { id: "insights", label: "Sky" },
];

function MobileNav({ view, onNavigate }) {
  return (
    <nav className="mobile-nav">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`mobile-nav-item ${view === item.id ? "active" : ""}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default MobileNav;
