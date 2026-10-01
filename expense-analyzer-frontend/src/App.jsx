import { useState } from "react";

import { expenses as seedExpenses } from "./data/expense.js";

import TopBar from "./components/layout/TopBar.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import MobileNav from "./components/layout/MobileNav.jsx";

import Overview from "./pages/Overview.jsx";
import Timeline from "./pages/Timeline.jsx";
import Budget from "./pages/Budget.jsx";
import Categories from "./pages/Categories.jsx";
import Insights from "./pages/Insights.jsx";

const MONTHLY_LIMIT = 15000;

function App() {
  const [expenses, setExpenses] = useState(seedExpenses);
  const [view, setView] = useState("overview");
  const [activeCategory, setActiveCategory] = useState(null);

  function handleAddExpense(expense) {
    setExpenses((current) => [...current, expense]);
  }

  function handleDeleteExpense(id) {
    setExpenses((current) => current.filter((expense) => expense.id !== id));
  }

  function handleCategorySelect(category) {
    setActiveCategory(category);
  }

  function handleNavigate(nextView) {
    setView(nextView);
  }

  const pageProps = {
    expenses,
    activeCategory,
    onCategorySelect: handleCategorySelect,
    onAdd: handleAddExpense,
    onDelete: handleDeleteExpense,
    limit: MONTHLY_LIMIT,
  };

  return (
    <div className="app-shell">
      <Sidebar view={view} onNavigate={handleNavigate} />

      <div className="app-main">
        <TopBar view={view} />

        {view === "overview" && <Overview {...pageProps} />}
        {view === "timeline" && <Timeline {...pageProps} />}
        {view === "budget" && <Budget {...pageProps} />}
        {view === "categories" && <Categories {...pageProps} />}
        {view === "insights" && <Insights {...pageProps} />}
      </div>

      <MobileNav view={view} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
