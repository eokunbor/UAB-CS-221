window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const convertButton = document.getElementById("convertButton");

   convertButton.addEventListener("click", function() {
      const celsiusInput = document.getElementById("cInput");
      const fahrenheitInput = document.getElementById("fInput");

      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = parseFloat(fahrenheitInput.value);

      if (!isNaN(celsiusValue)) {
         const fResult = convertCtoF(celsiusValue);
         fahrenheitInput.value = fResult; 

      } 
      else if (!isNaN(fahrenheitValue)) {
         const cResult = convertFtoC(fahrenheitValue);
         celsiusInput.value = cResult;
      }
   });
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9 / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}

