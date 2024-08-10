'use strict'

import {buttonsId} from "./PrincipalMenu.js";
import {principalMenu} from "./index.js";

const matrix = [];

document.querySelector("#reset").addEventListener('click',() => {
    buttonsId.splice(0, buttonsId.length);
    principalMenu.fillMatrix();
    document.querySelector("#matrix-container").innerHTML = '';
    principalMenu.printPrincipalMenu();
});

document.querySelector("#play").addEventListener('click', async () => {

    let term = new Terminal({
        cursorBlink: true,
        rows: 20,
        cols: 80,
        theme: {background: '#000000', foreground: '#ffffff'}
    });

    for (let i = 0; i < 12; i++) {
        matrix[i] = [];
        for (let j = 0; j < 12; j++) {
            matrix[i][j] = '□';
        }
    }

    buttonsId.forEach(Element => {
        let split = Element.split('-');
        matrix[split[0]][split[1]] = '■';
    });

    const question = parseInt(prompt("cuantas veces deseas iterar la matriz?"));

    document.querySelector('#term').innerHTML = '';
    term.open(document.getElementById('term'));
    term.write('Aqui tienes una representacion de tu matrix! \r\n\n');

    for (let a = 0; a < 12; a++) {
        let line = "";
        for (let b = 0; b < 12; b++) {
            line += matrix[a][b] + " ";
        }
        term.write(" ")
        term.write(line);
        term.write('\r\n');
    }
    term.write('\n\n----------------------------------------------------------------------\r\n');

    if (!isNaN(question)) {
        let aux = [];
        let counter = 0;
        while (counter < question) {
            for (let i = 0; i < matrix.length; i++) {
                aux [i] = [];
                for (let j = 0; j < matrix[i].length; j++) {
                    if (i === 0 && j === 0) {
                        aux[i][j] = validateFirstCorner(matrix,i,j);
                    }
                    if (i === 0 && (j > 0 && j < 11)) {
                        aux[i][j] = validateFirstRow(matrix,i,j);
                    }
                    if (i === 0 && j === 11) {
                        aux[i][j] = validateSecondCorner(matrix,i,j);
                    }
                    if ((i > 0 && i < 11) && j === 0) {
                        aux[i][j] = validateFirstCol(matrix,i,j);
                    }
                    if (i === 11 && j === 0) {
                        aux[i][j] = validateThirdCorner(matrix,i,j);
                    }
                    if (i === 11 && (j > 0 && j < 11)) {
                        aux[i][j] = validateLastRow(matrix,i,j);
                    }
                    if (i === 11 && j === 11) {
                        aux[i][j] = validateLastCorner(matrix,i,j);
                    }
                    if((i > 0 && i < 11) && j === 11) {
                        aux[i][j] = validateLastCol(matrix,i,j);
                    }
                    if ((i > 0 && i < 11) && (j > 0 && j < 11)) {
                        aux[i][j] = validateAllNeighbors(matrix,i,j);
                        console.log(aux[i][j]);
                    }
                }
            }

            term.write('\r\n');
            for (let a = 0; a < aux.length; a++) {
                let line = "";
                for (let b = 0; b < aux.length; b++) {
                    line += aux[a][b] + " ";
                }
                term.write(" ")
                term.write(line);
                term.write('\r\n');
            }
            
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] = aux[i][j];
                }
            }

            counter += 1;
        }
    }

});

function validateFirstCorner(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[0, 1], [1, 1], [1, 0]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateFirstRow(matrix, i, j) {
    const state = matrix[i][j];
    const deltas = [[0, 1],[1, 1],[1, 0],[1, -1], [0, -1]];
    const neighbors = deltas.reduce((count, [di, dj]) =>
            (matrix[i + di]?.[j + dj] === '■') ? count + 1 : count, 0);
    return validateNeighborsQuantity(neighbors, state);
}

function validateSecondCorner(matrix, i, j) {
    const state = matrix[i][j];
    const deltas = [[1, 0],[1, -1],[0, -1]];
    const neighbors = deltas.reduce((count, [di, dj]) =>
            (matrix[i + di]?.[j + dj] === '■') ? count + 1 : count, 0);
    return validateNeighborsQuantity(neighbors, state);
}

function validateFirstCol(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[-1, 0], [-1, 1], [0, 1], [1, 1],[1, 0]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateThirdCorner(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[-1, 0], [-1, 1], [0, 1]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateLastRow(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateLastCorner(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[0, -1], [-1, -1], [-1, 0]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateLastCol(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[0, -1],[-1, -1],[-1, 0],[1, 0],[1, -1]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateAllNeighbors(matrix, i, j) {
    const state = matrix[i][j];
    let neighbors = 0;
    const deltas = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];
    for (const [di, dj] of deltas) {
        if (matrix[i + di]?.[j + dj] === '■')
            neighbors++;
    }
    return validateNeighborsQuantity(neighbors, state);
}

function validateNeighborsQuantity(neighbors, state) {
    if (state === '■') {
        return (neighbors === 2 || neighbors === 3) ? '■' : '□';
    }
    return neighbors === 3 ? '■' : '□';
}
