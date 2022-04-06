//handle when the number is pressed. It renders the number into #input element

function number(number) {
  // TODO: answer here
  if (input.value == "") {
    input.value = number;
  } else {
    input.value += number;
  }
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
  // TODO: answer here
  if (operator == "=") {
    calculate();
  } else if (operator == "AC") {
    input.value = "";
  } else if (operator == "Del") {
    input.value = input.value.slice(0, -1);
  } else {
    input.value += operator;
  }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
  // TODO: answer here
  input.value = eval(input.value);
}
