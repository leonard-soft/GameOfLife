export class TheoreticalBasisMenu {

    constructor(rootElementId) {
        this._rootElementId = rootElementId;
    }

    printTitle() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <h1 align="center" class="bungee-shade-regular">¿Que conceptos algebraicos estan presentes en el trabajo colaborativo?</h1> <br>`;
    }

    printTheoricBoard () {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .content {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: auto;
                }
                .content h2 {
                    color: #333;
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 10px;
                }
                .content p {
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                .content ul {
                    list-style: disc;
                    padding-left: 20px;
                }
                .content ul li {
                    margin-bottom: 10px;
                    color: #555;
                }
            </style>
            <div class="content">
                <h2>Vectores</h2>
                <p>Un vector es una estructura de datos que almacena una colección de elementos del mismo tipo en una secuencia lineal. Los vectores son útiles para representar datos en una dimensión, como una lista de números. En matemáticas, un vector se representa comúnmente como una columna o fila de números.</p>
                <h2>Matrices</h2>
                <p>Una matriz es una estructura de datos bidimensional que almacena elementos en filas y columnas. Cada elemento de la matriz se identifica mediante dos índices: uno para la fila y otro para la columna. Las matrices son fundamentales en muchas áreas de las matemáticas y la programación, especialmente en álgebra lineal, gráficos por computadora, y más.</p>
                <h2>Operaciones con Matrices</h2>
                <p>Las operaciones con matrices incluyen diversas manipulaciones matemáticas que se pueden realizar sobre matrices.</p>
                <h2>Transformaciones Lineales</h2>
                <p>Cada iteración del "Game of Life" puede considerarse como una transformación de la matriz inicial. Esta transformación es una aplicación de las reglas del juego a cada celda de la matriz.</p>
                <h2>Determinantes y Subespacios</h2>
                <p>"En el 'Game of Life', ciertas configuraciones de celdas muestran comportamientos repetitivos y estables. Estas configuraciones pueden ser consideradas como subespacios dentro del espacio vectorial de todas las posibles configuraciones. Por ejemplo, los 'Blinkers' son patrones que alternan entre dos estados y pueden considerarse invariables bajo las transformaciones del juego."</p>
            </div> <br> <br> <br>
        `;
    }

    printTecnologies() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
         <style>
            .tech-content {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 800px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .tech-item {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .tech-item img {
                width: 50px;
                height: 50px;
            }
            .tech-item h3 {
                margin: 0;
                color: #333;
            }
            .tech-item p {
                margin: 0;
                color: #555;
            }
        </style>
         
         <h2 align="center" class="bungee-shade-regular">Lenguajes y Tecnologias usadas</h2>
         
            <div class="tech-content">
        <div class="tech-item">
            <img src="../image/HTML5_logo_and_wordmark.svg.png" alt="Logo HTML">
            <div>
                <h3>HTML</h3>
                <p>HTML (HyperText Markup Language) es el estándar para estructurar el contenido de una página web. Define los elementos y la semántica de los documentos web.</p>
            </div>
        </div>
        <div class="tech-item">
            <img src="../image/CSS3_logo_and_wordmark.svg.png" alt="Logo CSS">
            <div>
                <h3>CSS</h3>
                <p>CSS (Cascading Style Sheets) es el lenguaje de estilo utilizado para describir la presentación de un documento HTML. Permite aplicar estilos, como colores, fuentes y diseños.</p>
            </div>
        </div>
        <div class="tech-item">
            <img src="../image/JavaScript-logo.png" alt="Logo JavaScript">
            <div>
                <h3>JavaScript</h3>
                <p>JavaScript es un lenguaje de programación que permite la interacción dinámica con el contenido de la página web. Además, es capaz de manipular matrices, lo que facilita el trabajo con estructuras de datos complejas y operaciones matemáticas.</p>
            </div>
        </div>
        <div class="tech-item">
            <img src="../image/webstorm-icon-2048x2048-fehb91is.png" alt="Logo JavaScript">
            <div>
                <h3>Webstorm</h3>
                <p>WebStorm es un entorno de desarrollo integrado (IDE) diseñado específicamente para JavaScript, pero también soporta tecnologías web como HTML, CSS, TypeScript, Node.js, y frameworks populares como React, Angular, y Vue.js. Desarrollado por JetBrains, WebStorm ofrece herramientas avanzadas para la edición de código, depuración, pruebas, y control de versiones, lo que lo convierte en una opción potente para desarrolladores web que buscan mejorar su productividad.</p>
            </div>
        </div>
    </div> <br> <br>
        `;
    }

    cleanRootElement() {
        document.querySelector(`#${this._rootElementId}`).innerHTML = '';
    }

}