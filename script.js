function calculateCompoundInterest() {
    // Get user inputs
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);

        var theAnswer = (initialAmount * interestRate
        +initialAmount*interestRate
        -(initialAmount * 0.25)).val;

    const resultAmountElement = document.getElementById('resultAmount');
    resultAmountElement.textContent = theAnswer;
    

}
