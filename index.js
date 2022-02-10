const inputNum = document.getElementById("input");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

function factorial(n) {
    if (n == NaN || n <= 0) {
        output.innerText = "Please enter a positive integer."

    } else {
        let index = 1;
        let outputNum = factorialRecursion(n);
        output.innerText = "The factorial of " + n + " is " + outputNum;

        // this step could be done with a loop, but I included another function to use recursion
        function factorialRecursion (n) {
            if (n > 0) {
                index = index * n;
                factorialRecursion(n-1);
            }
            return index;
        }
    }
}

submitButton.addEventListener("click", (() => factorial(inputNum.value)));




