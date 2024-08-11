export class InfoMenu {

    constructor(professorName, rootElementId) {
        this._professorName = professorName;
        this._rootElementId = rootElementId;
    }

    getProfessorName() {
        return this._professorName;
    }

    setProfessorName(value) {
        this._professorName = value;
    }

    getRootElementId() {
        return this._rootElementId;
    }

    setRootElementId(value) {
        this._rootElementId = value;
    }

    cleanRootElement() {
        document.querySelector(`#${this._rootElementId}`).innerHTML = '';
    }

    printTitle() {
        document.querySelector(`#${this._rootElementId}`).innerHTML = `
            <h1 align="center" class="bungee-shade-regular" >WELCOME TO GAME OF LIFE</h1> <br>
        `;
    }

    printProfessorCard() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <h1 align="center" class="bungee-shade-regular">DOCENTE</h1> <br>
            <div class="card shake color-change-5x" style="width: 14rem; display: block; margin: auto;">
                <img src="../image/pixelcut-export%20(1).png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 align="center" class="card-title bungee-shade-regular">${this._professorName}</h5>
                </div>
            </div> <br>
        `;
    }

    printStudentsCards() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <style>
                .students {
                 display: flex;
                }
                
                .card {
                    width: 14rem; 
                }
            
                 @media screen and (max-width: 986px) {
                    .students {
                        display: block;
                        margin: auto;        
                    }  
                    
                    .card {
                        width: 200px; 
                    }
                   
                 }
            </style>
            <br><br><br><h1 align="center" class="bungee-shade-regular">ESTUDIANTES</h1> <br>
            <div class="students">
                <div class="card shake color-change-5x" style="display: block; margin: auto;">
                    <img src="../image/said.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 align="center" class="card-title bungee-shade-regular">Said Acosta Cepeda</h5>
                    </div>
                </div>
                <div class="card shake color-change-5x" style="display: block; margin: auto;">
                    <img src="../image/cristian.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 align="center" class="card-title bungee-shade-regular">Cristian Galeano</h5>
                    </div>
                </div>
                <div class="card shake color-change-5x" style="display: block; margin: auto;">
                    <img src="../image/leonard.png" class="card-img-top" style="height: 225px">
                    <div class="card-body">
                        <h5 align="center" class="card-title bungee-shade-regular">Leonardo Bermudez</h5>
                    </div>
                </div>
                <div class="card shake color-change-5x" style="display: block; margin: auto;">
                    <img src="../image/tomas.jpeg" class="card-img-top" style="height: 225px">
                    <div class="card-body">
                        <h5 align="center" class="card-title bungee-shade-regular">Tomas Jimenez</h5>
                    </div>
                </div> 
            </div> <br> <br>
        `;
    }

    printReportsAccordions() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
           <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Aportes Significativos Realizados por Said.
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Said Acosta fue el encargado de la construcción de la matriz usando la lógica de programación. Él implementó la funcionalidad que le permite al programa crear una matriz nueva cada vez que el usuario pulse el botón de jugar. Además de darle la capacidad de asignar un valor a todas las filas y columnas de la matriz.</div> 
           </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Aportes Significativos Realizados por Cristian.
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Cristian Galeano fue el responsable de implementar el concepto de transformaciones lineales. Ya que con cada iteración, el juego debe transformar la matriz, usando operaciones de adicción y sustracción para definir el estado de cada célula dentro de la misma.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Aportes Significativos Realizados por Leonardo.
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Leonardo Bermúdez fue el encargado de la representación visual del programa. Leonardo usó el concepto de vectores y matrices para dibujar las transformaciones lineales creadas por Cristian anteriormente. Dentro de las otras funcionalidades que Leonardo agregó fueron las animaciones y el apartado sobre los conceptos usados en el trabajo colaborativo.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Aportes Significtivos Realizados por Tomas.
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Tomas Jiménez fue el responsable de crear la funcionalidad que le permite al usuario crear su propio diseño dentro de la matriz. La funcionalidad creada por tomas le permite al usuario crear un patrón inicial e insertarlo dentro de la matriz. También fue el responsable de hacer funcionar el botón de limpiar matriz.</div>
            </div>
          </div>
        </div> <br> <br>
         <br> <br> <br> <br> <br> <br>
        `;
    }

}