import promptSync from 'prompt-sync';
import {
  createNewExpense,
  addExpense,
  listExpenses,
  getExpensesTotal,
} from './expenses.js';
const prompt = promptSync();

const filePath = 'data.json';

const commands = {
  add: (title, price) => {
    const expenseObject = createNewExpense(title, price);
    addExpense(filePath, expenseObject);
  },
  list: listExpenses,
  total: getExpensesTotal,
  help: () => console.log('Available commands: add, help'),
};

function executeCommand(inputString) {
  const tokens = inputString.trim().split(/\s+/);

  const commandName = tokens[0];
  const args = tokens.slice(1);

  if (commands[commandName]) {
    commands[commandName](...args);
  } else {
    console.log(
      `Unknown command: "${commandName}". Type "help" for a list of commands.`,
    );
  }
}

function main() {
  console.log('*** Expense Tracker ***');
  console.log('Type "help" for a list of commands.');
  while (true) {
    const input = prompt('> ');
    if (input === null) {
      break;
    }
    if (input.toLowerCase() === 'q') {
      break;
    }
    executeCommand(input);
  }
}

main();
