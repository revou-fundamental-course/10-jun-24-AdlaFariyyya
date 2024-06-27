let isCelsiusToFahrenheit = true;

//Konversi
function temperatureConverter() {
  const inputTemp = document.getElementById('inputTemp').value;
  let outputTemp, formula;
  const errorText = document.getElementById('errorText');
  const inputValue = parseFloat(inputTemp);

//  Empty input value validation
if (isNaN(inputValue) || inputTemp.trim() === '') {
  // Show error message
  errorText.innerText = "Mohon masukkan Angka";
  errorText.style.display = 'block';

  // Clear outputs
  document.getElementById('outputTemp').value = '';
  document.getElementById('formula').value = '';
  return; //exit the function if input is valid

} else {
  // Hide error message if input is valid
  errorText.style.display = 'none';
}




    // Celcius to Fahrenheit
   if (isCelsiusToFahrenheit) {
    outputTemp = (inputTemp * 9/5) + 32;
    formula =`${inputTemp}°C × 9/5 + 32 = ${outputTemp.toFixed(2)}°F`;

    // Fahrenheit to Celcius
   }else {
    outputTemp = (inputTemp - 32) * 5/9;
    formula =`(${inputTemp}°F - 32) × 5/9 = ${outputTemp.toFixed(2)}°C`;
   }
   document.getElementById('outputTemp').value = outputTemp.toFixed(2);
   document.getElementById('formula').value = formula;


}


//Reset Button
function resetConverter() {
    document.getElementById('inputTemp').value  = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('formula').value    = '';
    document.getElementById('errorText').style.display = 'none';
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

  //Calculation if input doesn't empty
  if (tempInputValue.trim() !== '') {
  temperatureConverter();

  }
}

// Enter Keyboard
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('inputTemp').addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        temperatureConverter();
    }
    });
});

function animateButton(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);// Durasi animasi harus sama dengan yang didefinisikan di CSS
}
