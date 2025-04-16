window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const convertButton = document.getElementById("convertButton");

   convertButton.addEventListener("click", function () {
      const celsiusInput = document.getElementById("cInput");
      const fahrenheitInput = document.getElementById("fInput");
      const weatherImage = document.getElementById("weatherImage");
      const errorMessage = document.getElementById("errorMessage");

      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = parseFloat(fahrenheitInput.value);

      let finalFahrenheit;

      if (!isNaN(celsiusValue)) {
         finalFahrenheit = convertCtoF(celsiusValue);
         fahrenheitInput.value = finalFahrenheit;
         errorMessage.textContent = "";
      } else if (!isNaN(fahrenheitValue)) {
         finalFahrenheit = fahrenheitValue;
         const cResult = convertFtoC(fahrenheitValue);
         celsiusInput.value = cResult;
         errorMessage.textContent = "";
      } else {
         let userInput = celsiusInput.value || fahrenheitInput.value;
         errorMessage.textContent = userInput + " is not a number";
         return;
      }

      if (typeof finalFahrenheit === "number") {
         if (finalFahrenheit < 32) {
            weatherImage.src = "images/cold.png";
         } else if (finalFahrenheit <= 50) {
            weatherImage.src = "images/cool.png";
         } else if (finalFahrenheit < 50) {
            weatherImage.src = "images/warm.png";
         } 
      }
   });
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9 / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}
