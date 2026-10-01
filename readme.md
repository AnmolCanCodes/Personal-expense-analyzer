# Personal Expense Analyzer

A modern personal finance dashboard for tracking expenses, monitoring budgets, and understanding spending patterns through a clean, data-focused interface.

This project combines a React-based frontend with reusable JavaScript logic for expense analytics, validation, and budget evaluation. It is designed to help users review their spending habits in a clear and visually structured way without relying on a traditional spreadsheet workflow.

---

## Overview

The application provides a complete expense-tracking experience with:

- an overview dashboard
- category-based analysis
- spending timeline
- budget monitoring
- transaction insights
- a lightweight expense management flow

It is built around the concept of turning financial activity into an interactive summary rather than a static ledger.

---

## Key Features

### Expense Tracking
- Add new expenses with title, amount, category, and date
- Delete existing entries
- View spending records in a structured timeline
- Filter expenses by category

### Financial Overview
- Total expenditure summary
- Average transaction value
- Highest expense identification
- Category-level visibility
- Monthly spending evaluation

### Budget Monitoring
- Set and evaluate a monthly spending limit
- Compare current spending against budget
- Track remaining balance
- Identify overspending conditions

### Insights and Visual Analytics
- Spending by category
- Monthly trends
- High-value transaction detection
- Summary metrics for faster decision-making

### User Experience
- Responsive UI for desktop and mobile layouts
- Clean navigation between sections
- Dashboard-style presentation with a visual-first design

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS
- Material UI components
- Lucide icons

### Core Logic
- JavaScript modules for analytics and validation
- Functional programming patterns
- Array utilities such as map, filter, reduce, sort, and some

---

## Repository Structure

```text
expense_project/
├── main.js
├── readme.md
├── package.json
├── budget/
│   └── budget.js
├── expense-functions/
│   ├── analytics.js
│   ├── expenseOperations.js
│   ├── monthlySummary.js
│   └── validation.js
├── expense-analyzer-frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       ├── data/
│       ├── pages/
│       └── utils/
└── storage/
    └── jsonStorage.js
```

---

## Architecture

The project has two complementary layers:

1. Frontend dashboard
   - Built with React and Vite
   - Provides the consumer-facing spending experience
   - Contains pages for overview, timeline, budget, categories, and insights

2. Expense logic layer
   - Located in the root project modules
   - Handles operations such as validation, analytics, monthly summaries, and budget status
   - Supports CLI-style experimentation and logic testing

This separation keeps business rules reusable while allowing the interface to remain focused on presentation and interaction.

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm

### Install frontend dependencies

```bash
cd expense-analyzer-frontend
npm install
```

### Run the app locally

```bash
npm run dev
```

This starts the Vite development server and serves the app in the browser.

### Run the CLI logic from the root project

```bash
node main.js
```

This launches the terminal-based expense workflow that allows adding, searching, filtering, and analyzing expenses.

---

## Available Scripts

In the frontend app:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

At the root project level:

```bash
node main.js
```

---

## Example Use Cases

- Track monthly household spending
- Review category-wise expenses
- Monitor whether monthly spending exceeds a budget
- Identify the highest-value purchases
- Review recent transactions by date and category

---

## Project Status

This project is a working expense analysis and dashboard application with a strong frontend foundation and reusable financial logic. It is suitable for personal budgeting, learning React architecture, and extending into additional functionality such as persistence, authentication, and more advanced analytics.

---

## Future Enhancements

Potential improvements include:

- persistent storage using a database or local storage
- user authentication and multi-user support
- API integration for real-time finance records
- CSV or JSON export features
- recurring expense detection
- advanced forecasting and trend analysis
- AI-powered financial insights

---

## Conclusion

Personal Expense Analyzer is a practical finance dashboard designed to help users understand where their money goes. It combines a polished user interface with structured expense logic to deliver a simple but effective personal budgeting experience.



---

## 👨‍💻 Author

**Anmol Gupta**

BCA Student · Full-Stack / AI Application Developer

GitHub: **[@AnmolCanCodes](https://github.com/AnmolCanCodes)**

---

## 📄 License

This project is currently intended as a personal learning and portfolio project.
