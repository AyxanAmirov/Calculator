const defaultValue = document.querySelector(".value");
const values = document.querySelectorAll(".calc-item,.calc-item-2, .calc-zero");
const deleteAllBtn = document.querySelector("#deleteAll");
const deleteBtn = document.querySelector("#delete");
const maths = document.querySelectorAll(".math");

function runEvents() {
  deleteAllBtn.addEventListener("click", deleteAll);
  deleteBtn.addEventListener("click", deleteValue);
}
runEvents();

values.forEach((value) => {
  value.addEventListener("click", () => {
    const operators = ["/", "*", "+", "-", "%", "."];
    const operatorsArr = ["/", "*", "+", "-", "%"];
    const lastChar = defaultValue.textContent.slice(-1);
    let operatorIndex = -1;
    let operator = "";
    for (let i = 0; i < operators.length; i++) {
      const index = defaultValue.textContent.indexOf(operators[i]);
      if (index !== -1) {
        operatorIndex = index;
        operator = operators[i];
        break;
      }
    }
    if (
      defaultValue.textContent === "0" &&
      operatorsArr.includes(value.textContent.trim())
    ) {
      return;
    }

    if (
      operators.includes(lastChar) &&
      operators.includes(value.textContent.trim())
    ) {
      return;
    }

    if (defaultValue.textContent === "0") {
      defaultValue.textContent = value.textContent.trim();
    } else {
      defaultValue.textContent += value.textContent.trim();
    }
    if (operatorIndex !== -1) {
      const leftSide = defaultValue.textContent.slice(0, operatorIndex);
      const rightSide = defaultValue.textContent.slice(operatorIndex + 1);

      switch (operator) {
        case "+":
          defaultValue.textContent = +leftSide + +rightSide;
          break;
        case "-":
          defaultValue.textContent = +leftSide - +rightSide;
          break;
        case "*":
          defaultValue.textContent = +leftSide * +rightSide;
          break;
        case "/":
          defaultValue.textContent = +leftSide / +rightSide;
          break;
        case "%":
          defaultValue.textContent = +leftSide % +rightSide;
          break;
      }
    }
    defaultValue.scrollLeft = defaultValue.scrollWidth;
  });
});

function deleteAll() {
  defaultValue.textContent = "0";
}

function deleteValue() {
  if (defaultValue.textContent !== "0") {
    defaultValue.textContent = defaultValue.textContent.slice(0, -1);
    let defaultArr = defaultValue.textContent.trim().split("");

    if (defaultArr.length == 0) {
      defaultValue.textContent = "0";
    }
  }
}
