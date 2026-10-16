# Expense Tracker CLI

A lightweight, JavaScript-powered terminal application designed to track your daily spending, organize expenses, and monitor budgets directly from your command line.

All your financial data is saved securely on your machine in a local JSON file.

## 🚀 Features

- **Fast Logging:** Add expenses in seconds without leaving your terminal.
- **Instant Summaries:** View or total your expenses instantly with simple commands.
- **Local Privacy:** Your data never leaves your computer; it is stored completely offline in a local JSON storage file.

## 🛠️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org) (v18.0.0 or higher)
- [npm](https://npmjs.com) (comes bundled with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   cd expense-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Link the CLI globally:**
   Link the package to your system so you can run it from any directory using the `expense-tracker` keyword.
   ```bash
   npm link
   ```

## 💻 Usage & Commands

Run the application using the base command `expense-tracker` followed by your desired action.

### 1. `add`

Adds a new expense to your local ledger. Requires a description and an amount.

```bash
expense-tracker add "Coffee" 4.50
# Output: Expense added successfully!
```

### 2. `list`

Displays a clean chronological list of all your logged expenses.

```bash
expense-tracker list
# Output:
# [2026-10-15] Coffee - $4.50
# [2026-10-16] Groceries - $45.20
```

### 3. `total`

Calculates and displays the exact sum of all logged expenses stored in your JSON file.

```bash
expense-tracker total
# Output: Total Expenses: $49.70
```

### 4. `help`

Displays the built-in manual detailing all available commands and formatting structures.

```bash
expense-tracker help
```

## 📁 Data Storage

Your data is managed locally inside a `data.json` file in the root directory (or your local system app data path).

- **Backup:** To backup your expenses, simply copy the JSON file.
- **Reset:** Deleting or clearing the JSON array inside the file will reset your ledger tracker completely.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
