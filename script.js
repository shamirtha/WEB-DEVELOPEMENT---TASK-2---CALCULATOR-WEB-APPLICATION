const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = 'Error';
        expression = '';
      }
    } else if (value === 'C') {
      expression = '';
      display.value = '';
    } else {
      expression += value;
      display.value = expression;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9+\-*/.]/)) {
    expression += e.key;
    display.value = expression;
  } else if (e.key === 'Enter') {
    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch {
      display.value = 'Error';
      expression = '';
    }
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (e.key === 'Escape') {
    expression = '';
    display.value = '';
  }
});
