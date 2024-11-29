// Escucha el evento de clic en el botón con id "ButtonYes"
document.getElementById("ButtonYes").addEventListener("click", function() {
    window.location.href = "i_knew_it.html";
});

const buttonNo = document.getElementById("ButtonNo");
const baseMoveDistance = 40;  // Distancia base que el botón se moverá
const speedMultiplier = 3; // Factor para aumentar la velocidad de movimiento
const dangerRadius = 100; // Radio de "peligro" alrededor del botón

// Variable para evitar que el cursor llegue al botón
let movingAway = false;

// Escucha el evento de movimiento del mouse
document.addEventListener("mousemove", function(event) {
    const buttonRect = buttonNo.getBoundingClientRect(); // Obtiene las coordenadas del botón
    const buttonCenterX = buttonRect.left + buttonRect.width / 2; // Centro del botón en X
    const buttonCenterY = buttonRect.top + buttonRect.height / 2; // Centro del botón en Y
    
    const distanceX = event.clientX - buttonCenterX; // Distancia horizontal del cursor al botón
    const distanceY = event.clientY - buttonCenterY; // Distancia vertical del cursor al botón
    
    // Si el cursor está dentro de un radio de peligro alrededor del botón, moverlo
    if (Math.abs(distanceX) < dangerRadius && Math.abs(distanceY) < dangerRadius) {
        movingAway = true;

        // Aumentamos la velocidad de movimiento multiplicando por un factor
        const moveX = -baseMoveDistance * (distanceX / Math.abs(distanceX) || 1) * speedMultiplier; // Movimiento en X
        const moveY = -baseMoveDistance * (distanceY / Math.abs(distanceY) || 1) * speedMultiplier; // Movimiento en Y

        // Aplicamos el movimiento al botón usando la propiedad transform
        buttonNo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Cuando el cursor sale del área del botón, lo restauramos a su posición original
buttonNo.addEventListener("mouseleave", function() {
    buttonNo.style.transform = "translate(0, 0)";
});
