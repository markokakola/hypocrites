from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['GET', 'POST'])
def calculate():
    if request.method == 'POST':
        sideA = float(request.form['sideA'])
        sideB = float(request.form['sideB'])
    elif request.method == 'GET':
        sideA = float(request.args.get('sideA'))
        sideB = float(request.args.get('sideB'))
    else:
        return "Method not allowed"

    hypotenuse = (sideA**2 + sideB**2)**0.5
    return render_template('result.html', hypotenuse=hypotenuse)

if __name__ == '__main__':
    app.run(debug=True)
    
'''<button onclick="showQuartic2EquationTask()">Арифметическая прогрессия</button>
<button onclick="showGeometricProgressionTask()">Геометрическая прогрессия</button>
function showQuartic2EquationTask() {
    document.getElementById("quarticEquation2Task").style.display = "block";
}
function showGeometricProgressionTask() {
    document.getElementById("geometricProgressionTask").style.display = "block";
}
function showCombinatoricsTask() {
    document.getElementById("combinatoricsTask").style.display = "block";
}
<button onclick="showPowerTask()">Вычисление степени</button>
    <div id="powerTask" style="display: none;">
        <h2>Степенная функция</h2>
        <p>Рассмотрим степенную функцию \(f(x) = a \cdot x^n\).</p>
        <p>Введите значение для коэффициента \(a\):</p>
        <input type="number" id="powerA" placeholder="a">
        <p>Введите значение для показателя степени \(n\):</p>
        <input type="number" id="powerN" placeholder="n">
        <p>Введите значение для \(x\):</p>
        <input type="number" id="powerX" placeholder="x">
        <button onclick="calculatePowerFunction()">Вычислить</button>
        <p id="powerResult"></p>
    </div>
    
    <div id="quarticEquation2Task" style="display: none;">
        <h2>Уравнение с одной переменной</h2>
        <p>Решите уравнение: \(ax^4 + bx^2 - c = 0\)</p>
        <p>Введите значение для \(a\):</p>
        <input type="number" id="quartic2A" placeholder="a">
        <p>Введите значение для \(b\):</p>
        <input type="number" id="quartic2B" placeholder="b">
        <p>Введите значение для \(c\):</p>
        <input type="number" id="quartic2C" placeholder="c">
        <button onclick="solveQuartic2Equation()">Решить</button>
        <p id="quartic2Result"></p>
    </div>
    function showPowerTask() {
            document.getElementById("powerTask").style.display = "block";
        }
            function calculatePowerFunction() {
            var a = parseFloat(document.getElementById("powerA").value);
            var n = parseFloat(document.getElementById("powerN").value);
            var x = parseFloat(document.getElementById("powerX").value);
        
            if (!isNaN(a) && !isNaN(n) && !isNaN(x)) {
                var result = a * Math.pow(x, n);
                document.getElementById("powerResult").textContent = "Результат: " + result;
            } else {
                document.getElementById("powerResult").textContent = "Пожалуйста, введите корректные значения для a, n и x.";
            }
        }
        function solveQuartic2Equation() {
            var a = parseFloat(document.getElementById("quartic2A").value);
            var b = parseFloat(document.getElementById("quartic2B").value);
            var c = parseFloat(document.getElementById("quartic2C").value);
    
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                if (a !== 0) {
                    // Calculate the solutions for x using the quadratic formula
                    var discriminant = b * b - 4 * a * c;
                    if (discriminant >= 0) {
                        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                        document.getElementById("quartic2Result").textContent = "Решения: x1 = " + x1 + ", x2 = " + x2;
                    } else {
                        document.getElementById("quartic2Result").textContent = "Уравнение не имеет действительных корней.";
                    }
                } else {
                    document.getElementById("quartic2Result").textContent = "Уравнение не существует (деление на ноль).";
                }
            } else {
                document.getElementById("quartic2Result").textContent = "Пожалуйста, введите корректные значения для a, b и c.";
            }
        }'''
        