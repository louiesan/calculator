//OPERATORS

plus = document.getElementById("plus");
mines = document.getElementById("mines");
mul = document.getElementById("mul");
slash = document.getElementById("slash");
del = document.getElementById("del");
equal = document.getElementById("equal");

// Numbers :

point = document.getElementById("point");
zero = document.getElementById("zero");
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");

// ACTIONS:

let res = "";
let display = document.getElementById("Afficher");

del.onclick = function () {
  display.value = "0";
  res = "";
};

point.onclick = function () {
  let check = res.split(/[\+\-\*\/]/).pop();
  console.log(check);
  if (!check.includes(".")) {
    if (
      res === "" ||
      res.endsWith(" ") ||
      res.endsWith("+") ||
      res.endsWith("-") ||
      res.endsWith("*") ||
      res.endsWith("/")
    ) {
      res += "0.";
    } else {
      res += ".";
    }
    display.value = res;
  }
};

zero.onclick = function () {
  res += "0";
  display.value = res;
};
one.onclick = function () {
  res += "1";
  display.value = res;
};
two.onclick = function () {
  res += "2";
  display.value = res;
};
three.onclick = function () {
  res += "3";
  display.value = res;
};
four.onclick = function () {
  res += "4";
  display.value = res;
};
five.onclick = function () {
  res += "5";
  display.value = res;
};
six.onclick = function () {
  res += "6";
  display.value = res;
};
seven.onclick = function () {
  res += "7";
  display.value = res;
};
eight.onclick = function () {
  res += "8";
  display.value = res;
};
nine.onclick = function () {
  res += "9";
  display.value = res;
};

// CALCULE FUNCTIONS :

mul.onclick = function () {
  res += "*";
  display.value = res;
};
plus.onclick = function () {
  res += "+";
  display.value = res;
};
mines.onclick = function () {
  res += "-";
  display.value = res;
};
slash.onclick = function () {
  res += "/";
  display.value = res;
};

equal.onclick = function () {
  try {
    let result = display.value;
    let res = new Function("return " + result);
    if (res() == "Infinity") {
      display.value = "Error";
    } else {
      display.value = res();
    }
  } catch (err) {
    display.value = "Error: Invalid Input!";
  }
};

document.addEventListener("keydown", function (key) {
  key.key === "0"
    ? zero.onclick()
    : key.key === "1"
    ? one.onclick()
    : key.key === "2"
    ? two.onclick()
    : key.key === "3"
    ? three.onclick()
    : key.key === "4"
    ? four.onclick()
    : key.key === "5"
    ? five.onclick()
    : key.key === "6"
    ? six.onclick()
    : key.key === "7"
    ? seven.onclick()
    : key.key === "8"
    ? eight.onclick()
    : key.key === "9"
    ? nine.onclick()
    : key.key === "+"
    ? plus.onclick()
    : key.key === "*"
    ? mul.onclick()
    : key.key === "/"
    ? slash.onclick()
    : key.key === "-"
    ? mines.onclick()
    : key.key === "Enter"
    ? equal.onclick()
    : key.key === "."
    ? point.onclick()
    : key.key === "Delete"
    ? del.onclick()
    : console.log("Invalid Value");
  if (key.key === "Backspace") {
    let updated = res.split("");
    updated.pop();
    res = updated.join("");
    display.value = res;
  }
});
