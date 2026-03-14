// Función para mostrar reglas específicas
function mostrarReglas(tipo) {
    const modal = document.getElementById('modal-reglas');
    const titulo = document.getElementById('modal-titulo');
    const contenido = document.getElementById('modal-contenido');
    
    let reglasHTML = '';
    
    switch(tipo) {
        case 'futbol':
            titulo.textContent = '⚽ Reglas - Futbol Tennis';
            reglasHTML = `
                <ul>
                    <li><strong>Equipos:</strong> 3 vs 3</li>
                    <li><strong>Toques por equipo:</strong> Máximo 3 toques, sin que un jugador toque el balón dos veces consecutivas</li>
                    <li><strong>Superficie de contacto:</strong> Cualquier parte del cuerpo excepto manos y brazos</li>
                    <li><strong>Saque:</strong> Debe ser cruzado. Se puede sacar con la mano (dejando botar) o con el pie. El balón debe pasar la red sin tocarla</li>
                    <li><strong>Bote:</strong> El balón puede botar máximo UNA vez en el campo propio antes de ser pasado. En el saque es OBLIGATORIO dejarlo botar</li>
                    <li><strong>Puntuación:</strong> Set a 11 puntos, ganando con diferencia mínima de 2 puntos</li>
                    <li><strong>Dimensiones de cancha:</strong> 8-12 metros de largo x 5-6 metros de ancho. Red a 1 metro de altura</li>
                </ul>
                <h4 style="color: #FF6600; margin: 15px 0 10px 0;">Faltas Comunes:</h4>
                <ul>
                    <li>❌ Tocar el balón con manos o brazos</li>
                    <li>❌ Tocar la red con el cuerpo</li>
                    <li>❌ El balón bota dos veces en el mismo campo</li>
                    <li>❌ El balón sale de los límites de la cancha</li>
                    <li>❌ Un jugador realiza dos toques consecutivos</li>
                </ul>
            `;
            break;
            
        case 'dominadas':
            titulo.textContent = '⚽ Reglas - Concurso de Dominadas ';
            reglasHTML = `
                <ul>
                    <li><strong>Objetivo:</strong> Mantener el balón en el aire el mayor tiempo posible sin que toque el suelo</li>
                    <li><strong>Partes del cuerpo permitidas:</strong> Cualquier parte excepto manos y brazos (empeine, muslos, rodillas, cabeza, pecho, bordes internos/externos del pie)</li>
                    <li><strong>Inicio:</strong> El balón se suelta de las manos para dar el primer toque con el pie o rodilla</li>
                    <li><strong>Conteo de toques:</strong> Se cuentan los toques consecutivos sin descanso</li>
                    <li><strong>Penalización:</strong> Si el balón toca el suelo, el conteo termina</li>
                    <li><strong>Tiempo límite:</strong> Cada participante tiene 2 minutos para realizar la mayor cantidad de toques consecutivos</li>
                </ul>
                <p style="color: #0066CC; margin-top: 15px; font-weight: bold;">¡Gana quien realice más toques consecutivos sin que el balón toque el suelo!</p>
            `;
            break;
            
        case 'crossbar':
            titulo.textContent = '🎯 Reglas - Crossbar Challenge';
            reglasHTML = `
                <ul>
                    <li><strong>Objetivo:</strong> Golpear el travesaño con el balón</li>
                    <li><strong>Puntuación especial:</strong> Golpear el travesaño y que el balón entre = 2 puntos</li>
                    <li><strong>Golpear solo el travesaño:</strong> 1 punto</li>
                    <li><strong>Distancia:</strong> Se indicará el día del evento</li>
                    <li><strong>Intentos:</strong> 5 oportunidades por persona</li>
                    <li><strong>Ganador:</strong> El jugador que logre más puntos</li>
                    <li><strong>Desempate:</strong> Rondas de "muerte súbita" hasta que uno falle y el otro acierte</li>
                </ul>
                <p style="color: #FF6600; margin-top: 15px;">💡 Tip: Busca el punto justo de potencia y elevación para sumar 2 puntos</p>
            `;
            break;
            
        case 'reto':
            titulo.textContent = '⚔️ Reglas - Reto: Sistemas/Gestión vs Industrial';
            reglasHTML = `
                <ul>
                    <li><strong>Equipos:</strong> 7 jugadores por equipo (mínimo 3 mujeres en cancha durante todo el partido)</li>
                    <li><strong>Uniforme Industrial:</strong> <span style="color: #DC3545; font-weight: bold;">Rojo completo 🔴</span></li>
                    <li><strong>Uniforme Sistemas/Gestión:</strong> <span style="background: linear-gradient(135deg, #0066CC, #FF6600); color: white; padding: 2px 8px; border-radius: 4px;">Azul con naranja 🔵🟠</span></li>
                  
                    
                    <li><strong>Tarjetas:</strong> Amarilla = 2 min fuera, Roja = expulsión</li>
                    <li><strong>Empate:</strong> Penales directos (3 por equipo, muerte súbita si es necesario)</li>
                    
                </ul>
                <p style="color: #0066CC; margin-top: 15px; font-weight: bold;">¡Importante! Respetar el mínimo de 3 mujeres en cancha todo el tiempo</p>
            `;
            break;
    }
    
    contenido.innerHTML = reglasHTML;
    modal.style.display = 'block';
}

// Función para mostrar información general
function mostrarInfoGeneral() {
    document.getElementById('modal-info').style.display = 'block';
}

// Funciones para cerrar modales
function cerrarModal() {
    document.getElementById('modal-reglas').style.display = 'none';
}

function cerrarModalInfo() {
    document.getElementById('modal-info').style.display = 'none';
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const modalReglas = document.getElementById('modal-reglas');
    const modalInfo = document.getElementById('modal-info');
    
    if (event.target == modalReglas) {
        modalReglas.style.display = 'none';
    }
    if (event.target == modalInfo) {
        modalInfo.style.display = 'none';
    }
}

// Animación de entrada para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const deportes = document.querySelectorAll('.deporte');
    deportes.forEach((deporte, index) => {
        deporte.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
});