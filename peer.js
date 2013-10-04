function displayResult()
{
var wortel = document.getElementById("tekst3").value;
var nieuweWortel = document.createTextNode("Hello " + wortel + "! Have a nice day!");
tekst1.removeChild(tekst1.firstChild);
tekst1.appendChild(nieuweWortel);
return false;
}