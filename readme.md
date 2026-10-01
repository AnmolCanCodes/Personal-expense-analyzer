# Money Atlas

> **See where your money travels.**

Money Atlas is a visual personal expense analyzer built with **React and JavaScript**. Instead of presenting financial data as a conventional spreadsheet-style dashboard, it turns spending activity into a visual map of where money moves across categories, time, and budgets.

The project focuses on building a polished, component-driven frontend while practicing core React concepts such as **state management, props, reusable components, event handling, conditional rendering, array methods, and data transformation**.

---

## ✦ Features

### Spending Overview

* Total spending at a glance
* Average transaction value
* Transaction count
* Spending period summary
* Visual overview of spending activity

### Spending Constellation

A visual representation of spending categories.

* Each category becomes a visual "planet"
* Larger spending creates a larger visual node
* Categories can be selected to explore their associated expenses
* Spending data is transformed into a visual representation rather than a traditional table

### Money Trail

A timeline-based view of individual expenses.

* Chronological expense history
* Expense categories and dates
* Individual transaction amounts
* Category filtering
* Expense deletion support

### Add Expense

A dedicated expense composer for recording new transactions.

Users can provide:

* Expense title
* Amount
* Category
* Date

New expenses immediately update the React interface through shared application state.

### Budget Tracking

A visual budget system that provides:

* Monthly spending limit
* Current spending
* Remaining budget
* Budget utilization percentage
* Overspending detection
* Spending pace and projection

### Insights

The application transforms raw expense data into useful summaries such as:

* Highest expense
* Average transaction
* Category totals
* Monthly spending
* Daily spending pace
* Monthly spending visualization

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **JavaScript (ES6+)**
* **Vite**
* **CSS**

### React Concepts Practiced

* Functional components
* Props
* `useState`
* `useMemo`
* Event handling
* Conditional rendering
* List rendering with `.map()`
* Derived state
* Component composition
* Parent → child data flow
* Child → parent communication through callbacks

### JavaScript Concepts

* Array methods

  * `map()`
  * `filter()`
  * `reduce()`
  * `sort()`
  * `find()`
* Destructuring
* Spread syntax
* Template literals
* Objects and arrays
* Date handling
* `Intl.NumberFormat`
* `Intl.DateTimeFormat`
* ES modules

---

## 📁 Project Structure

```text
expense-analyzer-frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopBar.jsx
│   │   │   └── MobileNav.jsx
│   │   │
│   │   ├── overview/
│   │   │   ├── SpendingHero.jsx
│   │   │   ├── SpendingConstellation.jsx
│   │   │   ├── CategoryStrip.jsx
│   │   │   └── RecentExpenses.jsx
│   │   │
│   │   ├── expenses/
│   │   │   ├── ExpenseTimeline.jsx
│   │   │   ├── ExpenseItem.jsx
│   │   │   └── AddExpense.jsx
│   │   │
│   │   ├── budget/
│   │   │   ├── BudgetMeter.jsx
│   │   │   └── BudgetSummary.jsx
│   │   │
│   │   └── insights/
│   │       ├── InsightCard.jsx
│   │       └── MonthlyChart.jsx
│   │
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── Timeline.jsx
│   │   ├── Categories.jsx
│   │   ├── Budget.jsx
│   │   └── Insights.jsx
│   │
│   ├── data/
│   │   └── expenses.js
│   │
│   ├── utils/
│   │   ├── calculations.js
│   │   └── formatters.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧠 Application Architecture

Money Atlas separates the application into three primary layers:

```text
Data
 │
 ▼
Utilities
 │
 ▼
React Components
 │
 ▼
Pages
 │
 ▼
Application UI
```

### Data Layer

`src/data/expenses.js`

Contains the initial expense dataset used by the application.

### Utility Layer

`src/utils/`

Contains reusable logic for:

* Calculating totals
* Calculating averages
* Finding the highest expense
* Generating category totals
* Generating monthly totals
* Formatting currency
* Formatting dates

Keeping these operations outside components prevents business logic from being duplicated throughout the UI.

### Component Layer

`src/components/`

Contains reusable UI components responsible for individual parts of the application.

For example:

```text
SpendingHero
CategoryStrip
SpendingConstellation
ExpenseTimeline
BudgetMeter
MonthlyChart
```

### Page Layer

`src/pages/`

Combines multiple components into complete application screens.

---

## 🔄 Data Flow

The application follows React's one-way data flow.

```text
                 Overview
                    │
                    │ expenses
                    ▼
        ┌───────────┼────────────┐
        │           │            │
        ▼           ▼            ▼
      Hero    Constellation   Timeline
        │           │            │
        └───────────┼────────────┘
                    │
              Shared State
                    │
                    ▼
               Add Expense
                    │
                    │ onAdd()
                    ▼
                Overview
                    │
              setExpenses()
                    │
                    ▼
              UI Re-renders
```

This allows multiple components to react to the same underlying expense data.

---

## 🎨 Design Philosophy

Money Atlas intentionally avoids the typical expense-dashboard design.

Instead of:

```text
[ Total ]

[ Pie Chart ] [ Bar Chart ]

[ Expense Table ]
```

the interface is designed around the idea of **money movement**.

### Visual language

* Editorial typography
* Dark, atmospheric interface
* Generous whitespace
* Minimal visual noise
* Data-driven visual elements
* Timeline-based interactions
* Category "constellations"
* Strong typography hierarchy

The goal is to make financial data feel more like an **interactive visual journal** than an accounting spreadsheet.

---

## 💻 Getting Started

### Prerequisites

Make sure you have:

* Node.js
* npm
* Git

Check your versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd expense-analyzer-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown by Vite.

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

---

## 📊 Example Expense Data

The application currently works with locally defined expense data.

Example:

```js
{
  id: 1,
  title: "Grocery shopping",
  amount: 1250,
  category: "Food",
  date: "2026-09-20"
}
```

The current version does **not** require a backend or external database.

---

## 🚧 Current Status

Money Atlas is currently a **frontend-focused project**.

### Completed / In Progress

* [x] React + Vite setup
* [x] Expense data model
* [x] Expense calculations
* [x] Currency/date formatting
* [x] Component architecture
* [x] Spending overview
* [x] Category visualization
* [x] Expense timeline
* [x] Add expense interface
* [x] Budget components
* [x] Insight components
* [ ] Complete responsive design
* [ ] Persistent storage
* [ ] Backend API
* [ ] Authentication
* [ ] Production deployment

---

## 🔮 Future Improvements

Possible future iterations include:

### Backend Integration

Replace local mock data with a real API.

```text
React
  ↓
FastAPI
  ↓
PostgreSQL
```

### Persistent Expenses

Store user expenses in a database instead of browser/application state.

### Authentication

Add user accounts so every user has an isolated financial workspace.

### Advanced Analytics

Add:

* Spending trends
* Category comparisons
* Budget history
* Month-over-month changes
* Recurring expenses
* Spending patterns

### Data Export

Allow users to export their financial data as:

* CSV
* JSON
* Excel

### AI-Powered Insights

A future version could use an AI layer to transform financial data into natural-language insights, for example:

> "Food spending increased this month, mainly because of restaurant purchases."

The AI layer would complement the analytics rather than replace deterministic financial calculations.

---

## 🎯 Learning Objectives

This project was built to strengthen practical frontend development skills through a real application rather than isolated tutorials.

Key objectives include:

* Understanding React component architecture
* Managing shared state
* Passing data through props
* Designing reusable components
* Handling user interactions
* Transforming JavaScript data for UI
* Separating business logic from presentation
* Building responsive interfaces
* Creating a visually distinctive product experience

---

## 👨‍💻 Author

**Anmol Gupta**

BCA Student · Full-Stack / AI Application Developer

GitHub: **[@AnmolCanCodes](https://github.com/AnmolCanCodes)**

---

## 📄 License

This project is currently intended as a personal learning and portfolio project.
