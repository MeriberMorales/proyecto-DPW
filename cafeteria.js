// script.js

// Selecciona el botón de promoción
const promoBtn = document.getElementById("promoBtn");

// Agrega un evento al hacer clic
promoBtn.addEventListener("click", function () {
    alert("☕ Promoción del día: Cappuccino + Croissant por ₡3.500");
});

// Mensaje de bienvenida al cargar la página
window.onload = function () {
    console.log("Bienvenido a Cafetería Aroma Café");
};
//Debe ser la LÍNEA 1 de tu archivo
require('dotenv').config(); 

//Luego siguen tus importaciones normales...
const express = require('express'); 

// ✅ AHORA:
const puerto = process.env.PORT || 3000;
const conexion = process.env.DB_URI;
