let expression = ''; // store the arithmetic expression entered by the user

		function addToExpression(value) {
		  expression += value;
		  document.getElementById('calculator').childNodes[1].value = expression;
		}

		function evaluateExpression() {
		  let result = eval(expression);
		  document.getElementById('calculator').childNodes[1].value = result;
		  expression = '';
		}