function calculate(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return 'Error: Invalid expression';
  }
}

function handleButtonClick(value) {
  const expression = document.getElementById('expression').value;
  const updatedExpression = expression + value;
  document.getElementById('expression').value = updatedExpression;
}

function handleOperatorClick(operator) {
  const expression = document.getElementById('expression').value;
  const updatedExpression = expression + operator;
  document.getElementById('expression').value = updatedExpression;
}

function handleClearClick() {
  document.getElementById('expression').value = '';
  document.getElementById('result').textContent = '';
}

function handleEqualsClick() {
  const expression = document.getElementById('expression').value;
  const result = calculate(expression);
  document.getElementById('result').textContent = result;
}