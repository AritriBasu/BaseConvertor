document.getElementById('convert').onclick = tempCon;
document.getElementById('clear').onclick = clearAll;

function tempCon() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
  
  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }
  


    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(2);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(2);
}


function clearAll() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 




