import { useState } from "react";

const initialForm = {
  title: "",
  amount: "",
  category: "Food",
  date: new Date().toLocaleDateString("en-CA"),
};

const categories = [
  "Food",
  "Bills",
  "Travel",
  "Shopping",
  "Health",
  "Entertainment",
  "Other",
];

function AddExpense({ onAdd }) {
  const [form, setForm] = useState(initialForm);
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.amount || !form.date) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: form.title.trim(),
      amount: Number(form.amount),
      category: form.category,
      date: form.date,
    };

    onAdd?.(newExpense);

    setForm(initialForm);
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="add-expense-trigger"
        onClick={() => setIsOpen(true)}
      >
        <span>+</span>
        ADD EXPENSE
      </button>

      {isOpen && (
        <div className="expense-composer">
          <div
            className="composer-backdrop"
            onClick={() => setIsOpen(false)}
          />

          <div className="composer-panel">
            <div className="composer-header">
              <div>
                <p className="eyebrow">NEW MOVEMENT</p>
                <h2>Where did it go?</h2>
              </div>

              <button
                className="composer-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>
                <span>WHAT</span>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Dinner with friends"
                  autoFocus
                />
              </label>

              <label>
                <span>HOW MUCH</span>

                <div className="amount-input">
                  <b>₹</b>

                  <input
                    type="number"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="0"
                    min="1"
                  />
                </div>
              </label>

              <label>
                <span>WHERE</span>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>WHEN</span>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </label>

              <button
                type="submit"
                className="save-expense"
              >
                RECORD MOVEMENT →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddExpense;