// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
    }


module.exports = {
    fahrenheitToCelsius,
    celsiusToFahrenheit
}