
var b_mercurio = document.getElementById("b_mercurio");
var b_venus = document.getElementById("b_venus");
var b_marte = document.getElementById("b_marte");
var b_jupiter = document.getElementById("b_jupiter");
var b_saturno = document.getElementById("b_saturno");
var b_urano = document.getElementById("b_urano");
var b_neptuno = document.getElementById("b_neptuno");

// Gravedades.

var g_tierra = 9.81;
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_marte = 3.711;
var g_jupiter = 24.79;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;

// Eventos.

b_mercurio.addEventListener("click", Mercurio);
b_venus.addEventListener("click", Venus);
b_marte.addEventListener("click", Marte);
b_jupiter.addEventListener("click", Jupiter);
b_saturno.addEventListener("click", Saturno);
b_urano.addEventListener("click", Urano);
b_neptuno.addEventListener("click", Neptuno);

// Funciones.

function Mercurio () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_mercurio);
    alert("Tu peso en Mercurio es " + peso_final.toFixed(4) + " Kg.");
}

function Venus () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_venus);
    alert("Tu peso en Venus es " + peso_final.toFixed(4) + " Kg.");
}

function Marte () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_marte);
    alert("Tu peso en Marte es " + peso_final.toFixed(4) + " Kg.");
}

function Jupiter () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_jupiter);
    alert("Tu peso en Jupiter es " + peso_final.toFixed(4) + " Kg.");
}

function Saturno () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_saturno);
    alert("Tu peso en Saturno es " + peso_final.toFixed(4) + " Kg.");
}

function Urano () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_urano);
    alert("Tu peso en Urano es " + peso_final.toFixed(4) + " Kg.");
}

function Neptuno () {
    peso = document.getElementById("peso");
    peso_real = parseFloat(peso.value);
    peso_final = peso_real / g_tierra * (g_neptuno);
    alert("Tu peso en Neptuno es " + peso_final.toFixed(4) + " Kg.");
}
