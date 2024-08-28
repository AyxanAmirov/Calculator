const defaultValue = document.querySelector(".value");
const values = document.querySelectorAll(".calc-item,.calc-item-2, .calc-zero");
const deleteAllBtn = document.querySelector("#deleteAll");
const deleteBtn = document.querySelector("#delete");

values.forEach((value) => {
  value.addEventListener("click", () => {
    const operators = ["/", "*", "+", "-", "%", "."];
    const lastChar = defaultValue.textContent.slice(-1);

    if (
      defaultValue.textContent === "0" &&
      operators.includes(value.textContent.trim())
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

    defaultValue.scrollLeft = defaultValue.scrollWidth;
  });
});

runEvents();

function runEvents() {
  deleteAllBtn.addEventListener("click", deleteAll);
  deleteBtn.addEventListener("click", deleteValue);
}

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
