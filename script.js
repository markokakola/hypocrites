document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateHypotenuse);

    function calculateHypotenuse() {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);

        if (!isNaN(sideA) && !isNaN(sideB)) {
            const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
            document.getElementById("result").textContent = `Длина гипотенузы (c): ${hypotenuse.toFixed(2)}`;
        } else {
            document.getElementById("result").textContent = "Пожалуйста, введите корректные значения для катетов.";
        }
    }
});