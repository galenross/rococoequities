function calculateCompoundInterest() {
    // Get user inputs
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);

        var theAnswer = initialAmount * interestRate
        +initialAmount*interestRate
        -(initialAmount * 0.25);

    const resultAmountElement = document.getElementById('resultAmount');
    resultAmountElement.textContent = theAnswer.toFixed(2);
    

}
