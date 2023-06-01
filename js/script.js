{
    console.log("Cześć! Dzisiaj liczymy mamonę!");
    const calculateResult = (amount, currency) => {
        const EUR = 4.51;
        const USD = 4.17;
        const GBP = 5.2;
        const CHF = 4.66;
        const CZK = 0.19;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GBP":
                return amount / GBP;
            case "CHF":
                return amount / CHF;
            case "CZK":
                return amount / CZK;
        }
    };
    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currencyOption");
        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        let result = calculateResult(amount, currency);
        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
