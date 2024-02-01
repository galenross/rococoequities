function calculateCompoundInterest() {
    // Get user inputs
    const timePeriod = document.getElementById('timePeriod').value;
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);

    // Convert interest rate to decimal
    const rateDecimal = interestRate / 100;

    // Calculate compound interest with tax deduction
    let compoundInterest = 0;
    switch (timePeriod) {
        case 'day':
            compoundInterest = initialAmount * Math.pow(1 + rateDecimal, 3650) * 0.75;
            break;
        case 'week':
            compoundInterest = initialAmount * Math.pow(1 + rateDecimal, 520) * 0.75;
            break;
        case 'month':
            compoundInterest = initialAmount * Math.pow(1 + rateDecimal, 120) * 0.75;
            break;
        default:
            break;
    }

    // Display the result
    const resultAmountElement = document.getElementById('resultAmount');
    resultAmountElement.textContent = compoundInterest.toFixed(2);
}
