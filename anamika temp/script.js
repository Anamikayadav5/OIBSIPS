const convertFar = () =>{
   var celsius = parseFloat(document.querySelector("#celsius").value);
   var fahrenheitResult = (1.8 * celsius) + 32;
   var a = fahrenheitResult.toFixed(2);
   document.querySelector("#celsius").value = celsius;
   document.querySelector("#fahrenheit").value = a;
   

}

const convertCel = () =>{
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);
    var celsiusResult = (fahrenheit-32) /18;
    var b = celsiusResult.toFixed(2);
    document.querySelector("#fahrenheit").value = fahrenheit;
    document.querySelector("#celsius").value = b;
    
 
 }

const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
}