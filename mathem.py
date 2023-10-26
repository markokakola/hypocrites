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