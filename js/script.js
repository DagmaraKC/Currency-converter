console.log("Cześć! Dzisiaj liczymy mamonę!");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currencyOption");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;
    let EUR = 4.51;
    let USD = 4.17;
    let GBP = 5.2;
    let CHF = 4.66;
    let CZK = 0.19;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "CZK":
            result = amount / CZK;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
