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
                    Aportes Realizados por Said.
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
           </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Aportes Realizados por Cristian.
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Aportes Realizados por Leonardo.
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Aportes Realizados por Tomas.
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div> <br> <br>
         <br> <br> <br> <br> <br> <br>
        `;
    }

}