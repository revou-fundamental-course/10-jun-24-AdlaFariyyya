let isCelsiusToFahrenheit = true;

//Konversi
function temperatureConverter() {
   const inputTemp = document.getElementById('inputTemp').value;
   let outputTemp, formula;
   var errorText = document.getElementById('errorText');
   var celciusInput = document.getElementById('inputTemp');
    var celciusValue = parseFloat(celciusInput.value);
    var errorText = document.getElementById('errorText');


    // Celcius to Fahrenheit
   if (isCelsiusToFahrenheit) {
    outputTemp = (inputTemp * 9/5) + 32;
    formula =`${inputTemp}°C × 9/5 + 32 = ${outputTemp}°F`;

    // Fahrenheit to Celcius
   }else {
    outputTemp = (inputTemp - 32) * 5/9;
    formula =`(${inputTemp}°F - 32) × 5/9 = ${outputTemp}°C`;
   }
   document.getElementById('outputTemp').value = outputTemp;
   document.getElementById('formula').value = formula;

   if (isNaN(celciusValue) || celciusInput.value.trim() === '') {
       // Show error message
       errorText.innerText = "Mohon masukkan Angka";
       errorText.style.display = 'block';

       // Clear Fahrenheit output
       document.getElementById('outputTemp').value = '';
   } else {
       // Hide error message if input is valid
       errorText.style.display = 'none';
   }

   // Reset input field
   celciusInput.value = '';

   // Animate button
   animateButton(document.getElementById('convertButton'));
}


//Reset Button
function resetConverter() {
    document.getElementById('inputTemp').value  = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('formula').value    = '';
}
 
//Reverse Button
function reverseConverter(){
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    // Title and header swap
  if (isCelsiusToFahrenheit) {
    document.getElementById('mainTitle').innerText      = "Konversi Celcius °C ke Fahrenheit °F";
    document.getElementById('inputHeader').innerText    = "Celcius °C";
    document.getElementById('outputHeader').innerText   = "Fahrenheit °F";
    document.getElementById('inputLabel').innerText     = "Celcius °C";
    document.getElementById('outputLabel').innerText    = "Fahrenheit °F";
  } else {
    document.getElementById('mainTitle').innerText      = "Konversi Fahrenheit °F ke Celcius °C";
    document.getElementById('inputHeader').innerText    = "Fahrenheit °F";
    document.getElementById('outputHeader').innerText   = "Celcius °C";
    document.getElementById('inputLabel').innerText     = "Fahrenheit °F";
    document.getElementById('outputLabel').innerText    = "Celcius °C";
  }

  //input and output values swap
  const tempInputValue = document.getElementById('inputTemp').value;
  document.getElementById('inputTemp').value    = document.getElementById('outputTemp').value;
  document.getElementById('outputTemp').value   = tempInputValue;

  //Penghitungan Langsung
  temperatureConverter();
}

// Enter Keyboard
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('inputTemp').addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        temperatureConverter();
    }
    });
});


