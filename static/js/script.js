$( function() {
    $( "#accordion" ).accordion();
  } );
function solveQuadratic() {
    var a = parseFloat(document.getElementById("quadraticA").value);
    var b = parseFloat(document.getElementById("quadraticB").value);
    var c = parseFloat(document.getElementById("quadraticC").value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        var discriminant = b * b - 4 * a * (-c);

        if (discriminant > 0) {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            document.getElementById("quadraticResult").textContent = "Решения: x1 = " + root1 + ", x2 = " + root2;
        } else if (discriminant == 0) {
            var root = -b / (2 * a);
            document.getElementById("quadraticResult").textContent = "Единственное решение: x = " + root;
        } else {
            document.getElementById("quadraticResult").textContent = "Уравнение не имеет действительных корней.";
        }
    } else {
        document.getElementById("quadraticResult").textContent = "Пожалуйста, введите корректные значения для a, b и c.";
    }
}

function solveCubicEquation2() {
    var a = parseFloat(document.getElementById("cubicA").value);
    var b = parseFloat(document.getElementById("cubicB").value);

    if (!isNaN(a) && !isNaN(b)) {
        if (a !== 0) {
            var x = b / a;
            document.getElementById("cubicResult").textContent = "Решение: x = -√" + x;
        } else {
            document.getElementById("cubicResult").textContent = "Уравнение не существует (деление на ноль).";
        }
    } else {
        document.getElementById("cubicResult").textContent = "Пожалуйста, введите корректные значения для a и b.";
    }
}

function solveCubicEquation() {
    var a = parseFloat(document.getElementById("variableA").value);
    var b = parseFloat(document.getElementById("variableB").value);
    var c = parseFloat(document.getElementById("variableC").value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        var discriminant = Math.pow(b, 2) - 4 * a * (-c);
        var roots = [];

        if (discriminant > 0) {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            roots.push(root1, root2);
        } else if (discriminant === 0) {
            var root = -b / (2 * a);
            roots.push(root);
        } else {
            roots.push("Комплексные корни");
        }

        document.getElementById("cubicEquationResult").textContent = "Результат: " + roots.join(", ");
    } else {
        document.getElementById("cubicEquationResult").textContent = "Пожалуйста, введите корректные значения для a, b и c.";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function solveEquationSystem() {
    var a = parseFloat(document.getElementById("eq1A").value);
    var b = parseFloat(document.getElementById("eq1B").value);
    var c = parseFloat(document.getElementById("eq1C").value);
    var d = parseFloat(document.getElementById("eq2A").value);
    var e = parseFloat(document.getElementById("eq2B").value);
    var f = parseFloat(document.getElementById("eq2C").value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f)) {
        var discriminant1 = Math.pow(b, 2) - 4 * a * c;
        var discriminant2 = Math.pow(e, 2) - 4 * d * f;
        var roots1 = [];
        var roots2 = [];

        if (discriminant1 > 0) {
            var root1_1 = (-b + Math.sqrt(discriminant1)) / (2 * a);
            var root1_2 = (-b - Math.sqrt(discriminant1)) / (2 * a);
            roots1.push(root1_1, root1_2);
        } else if (discriminant1 === 0) {
            var root1 = -b / (2 * a);
            roots1.push(root1);
        } else {
            roots1.push("Комплексные корни");
        }

        if (discriminant2 > 0) {
            var root2_1 = (-e + Math.sqrt(discriminant2)) / (2 * d);
            var root2_2 = (-e - Math.sqrt(discriminant2)) / (2 * d);
            roots2.push(root2_1, root2_2);
        } else if (discriminant2 === 0) {
            var root2 = -e / (2 * d);
            roots2.push(root2);
        } else {
            roots2.push("Комплексные корни");
        }

        document.getElementById("systemResult").textContent = "Решения первого уравнения: " + roots1.join(", ") + "\nРешения второго уравнения: " + roots2.join(", ");
    } else {
        document.getElementById("systemResult").textContent = "Пожалуйста, введите корректные значения для a, b, c, d, e и f.";
    }
}

function findFirstTerm() {
    var a = parseFloat(document.getElementById("geometricProgressionA").value);
    var b = parseFloat(document.getElementById("geometricProgressionB").value);

    if (!isNaN(a) && !isNaN(b) && b !== 0) {
        // Используем формулу для нахождения первого члена геометрической прогрессии
        var firstTerm = a / Math.pow(b, 6);
        document.getElementById("geometricProgressionResult").textContent = "Первый член геометрической прогрессии: " + firstTerm;
    } else {
        document.getElementById("geometricProgressionResult").textContent = "Пожалуйста, введите корректные значения для a и b (b не должен быть равен 0).";
    }
}

function solveInequality() {
    var selectedInequality = document.getElementById("inequalityType").value;
    var resultMessage = "";

    var x;
    for (x = -10; x <= 10; x += 0.1) {
        var expression = (2.5 * x + 3) * (4 * x - 1) - 2.5 * x * (4 * x + 2);

        if (
            (selectedInequality === "<" && expression < 3) ||
            (selectedInequality === ">" && expression > 3) ||
            (selectedInequality === "<=" && expression <= 3) ||
            (selectedInequality === ">=" && expression >= 3)
        ) {
            resultMessage = `Ответ: x = ${x}`;
            break;
        }
    }

    if (resultMessage === "") {
        resultMessage = "Неравенство не имеет решений для данного диапазона x.";
    }

    document.getElementById("inequalityResult").textContent = resultMessage;
}

function calculatePermutation() {
    var elementsCount = parseInt(document.getElementById("elementsCount").value);
    var seatsCount = parseInt(document.getElementById("seatsCount").value);
    
    if (!isNaN(elementsCount) && !isNaN(seatsCount) && elementsCount > 0 && seatsCount > 0) {
        var result = calculatePermutationCount(elementsCount, seatsCount);
        document.getElementById("permutationResult").textContent = "Результат: " + result;
    } else {
        document.getElementById("permutationResult").textContent = "Пожалуйста, введите корректные значения для n (n > 0) и k (k > 0).";
    }
}

function calculatePermutationCount(n, k) {
    if (k <= n) {
        return factorial(n) / factorial(n - k);
    } else {
        return 0; // Если k больше, чем n, то перестановка невозможна.
    }
}

function calculatePermutation() {
    var elementsCount = parseInt(document.getElementById("elementsCount").value);
    
    if (!isNaN(elementsCount) && elementsCount > 0) {
        var result = factorial(elementsCount);
        document.getElementById("permutationResult").textContent = "Результат: " + result;
    } else {
        document.getElementById("permutationResult").textContent = "Пожалуйста, введите корректное значение для n (n > 0).";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateArrangement() {
    var n = parseInt(document.getElementById("arrangementElementsCount").value);
    var k = parseInt(document.getElementById("arrangementSelectionCount").value);
    
    if (!isNaN(n) && !isNaN(k) && n >= k && n > 0 && k > 0) {
        var result = factorial(n) / factorial(n - k);
        document.getElementById("arrangementResult").textContent = "Результат: " + result;
    } else {
        document.getElementById("arrangementResult").textContent = "Пожалуйста, введите корректные значения для n и k (n >= k > 0).";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateCombination() {
    var n = parseInt(document.getElementById("combinationElementsCount").value);
    var k = parseInt(document.getElementById("combinationSelectionCount").value);
    
    if (!isNaN(n) && !isNaN(k) && n >= k && n > 0 && k > 0) {
        var result = factorial(n) / (factorial(k) * factorial(n - k));
        document.getElementById("combinationResult").textContent = "Результат: " + result;
    } else {
        document.getElementById("combinationResult").textContent = "Пожалуйста, введите корректные значения для n и k (n >= k > 0).";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateRelativeFrequency() {
    var k = parseInt(document.getElementById("eventOccurredCount").value);
    var n = parseInt(document.getElementById("totalTrialsCount").value);
    
    if (!isNaN(k) && !isNaN(n) && k >= 0 && n > 0) {
        var result = k / n;
        document.getElementById("relativeFrequencyResult").textContent = "Результат: " + result.toFixed(2); 
    } else {
        document.getElementById("relativeFrequencyResult").textContent = "Пожалуйста, введите корректные значения для k и n (k >= 0, n > 0).";
    }
}
