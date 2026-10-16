import fs from 'node:fs';

import { toTitleCase } from './utils.js';
const filePath = 'data.json';

export function createNewExpense(title, price) {
  const date = new Date();
  return {
    id: date.toLocaleDateString(),
    title: toTitleCase(title),
    price: Number(price).toFixed(2),
  };
}

export function addExpense(filePath, newExpense) {
  try {
    const currentData = loadExpenses(filePath);
    currentData.push(newExpense);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), 'utf-8');
    console.log('Expense successfully added!');
  } catch (err) {
    console.error('Error saving to file:', err);
  }
}

function loadExpenses(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    if (!data.trim()) return [];
    const parsedData = JSON.parse(data);
    return Array.isArray(parsedData) ? parsedData : [parsedData];
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    console.error('Error reading or parsing file:', err);
  }
}

export function listExpenses() {
  const expenses = loadExpenses(filePath);
  for (const expense of expenses) {
    console.log(`[${expense.id}] ${expense.title} - $${expense.price}`);
  }
}

export function getExpensesTotal() {
  const expenses = loadExpenses(filePath);
  const totalCost = expenses.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  console.log(`Total Expenses: $${totalCost.toFixed(2)}`);
}
