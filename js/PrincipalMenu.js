export let buttonsId = [];

export class PrincipalMenu {

    constructor(rootElementId, divMatrix) {
        this._rootElementId = rootElementId;
        this._divMatrix = divMatrix;
    }

    printTitle() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <h1 align="center" class="bungee-shade-regular">WELCOME TO GAME OF LIFE</h1> <br> <br>
        `;
    }

    printMatrixContainer() {
        document.querySelector(`#${this._rootElementId}`).innerHTML += `
            <style>
                .matrix-container {
                    width: 600px;
                    display:grid;
                    grid-template-columns: repeat(24, 0fr);
                    gap: 2px;
                    margin: auto;
                }
                .matrix-button {
                    background-color: #a1ef82;
                    color: darkblue;
                    width: 45px;
                    height: 45px;
                    border-radius: 6px;
                    border: 1px solid black;
                    text-align: center;
                    font-size: 10px; 
                    line-height: 10px; 
                }
            </style>
            <content style="display: block; margin: auto;">
                <aside id="matrix-container" class="matrix-container"></aside>
            </content>
        `;
    }

    getButtonId () {
        let buttons = document.querySelectorAll(".matrix-button")
        for(let i = 0; i <= buttons.length - 1; i++) {
            let button = buttons[i];
            button.addEventListener('click', (event) => {
                const clickedButton = event.target;
                console.log(clickedButton.id);
                buttonsId.push(clickedButton.id);
                clickedButton.style.backgroundColor = '#bb33ff';
                clickedButton.value = 'live';
            });
        }
    }

    fillMatrix() {
        for (let i= 0; i <= 11; i++) {
            this._divMatrix[i] = [];
            for(let j = 0; j <= 11; j++) {
                const button = document.createElement('button');
                button.className = 'matrix-button';
                button.style.display = 'block';
                button.style.margin = 'auto';
                button.type = "button";
                button.value = 'die';
                button.onclick = this.getButtonId;
                button.id = `${i}-${j}`;
                this._divMatrix[i][j] = button;
            }
        }
    }

    printPrincipalMenu() {
        let containerElement = document.querySelector("#matrix-container");
        for(let i = 0; i <= 11; i++) {
            for(let j = 0; j <= 11; j++) {
                const rowDiv = document.createElement('div');
                rowDiv.style.width = '100%';
                rowDiv.style.display = 'block';
                rowDiv.id = `${i}-${j}`;
                rowDiv.style.margin = 'auto';
                rowDiv.appendChild(this._divMatrix[i][j]);
                containerElement.appendChild(rowDiv);
                containerElement.appendChild(document.createElement('br'));
            }
        }
    }

    cleanButtonsArray () {
        return []
    }

    writeInConsoleList() {
        console.log(this._buttonsId);
    }

    cleanRootElement() {
        document.querySelector(`#${this._rootElementId}`).innerHTML = '';
    }


    getRootElementId() {
        return this._rootElementId;
    }

    setRootElementId(value) {
        this._rootElementId = value;
    }

    getDivMatrix() {
        return this._divMatrix;
    }

    setDivMatrix(value) {
        this._divMatrix = value;
    }

}