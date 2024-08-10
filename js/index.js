import {PrincipalMenu, buttonsId} from "./PrincipalMenu.js";
import {TheoreticalBasisMenu} from "./TheoreticalBasisMenu.js";
import {InfoMenu} from "./InfoMenu.js";

export let divMatrix = [];
export let principalMenu = new PrincipalMenu("root", divMatrix);
let theoreticMenu = new TheoreticalBasisMenu("root");
let infoMenu = new InfoMenu("Luz Florez Olarte", "root");

principalMenu.cleanRootElement();
principalMenu.printTitle();
principalMenu.printMatrixContainer();
principalMenu.fillMatrix();
principalMenu.printPrincipalMenu();

document.querySelector("#home").addEventListener('click', () => {
   principalMenu.cleanRootElement();
   principalMenu.printTitle();
   principalMenu.printMatrixContainer();
   principalMenu.fillMatrix();
   principalMenu.printPrincipalMenu();
   document.querySelector("#play").style.display = 'block';
   document.querySelector("#reset").style.display = 'block';
   document.querySelector("#term").innerHTML = '';
});

document.querySelector("#theoric").addEventListener('click', () => {
   theoreticMenu.cleanRootElement();
   theoreticMenu.printTitle();
   theoreticMenu.printTheoricBoard();
   theoreticMenu.printTecnologies();
   document.querySelector("#play").style.display = 'none';
   document.querySelector("#reset").style.display = 'none';
   document.querySelector("#term").innerHTML = '';
});

document.querySelector("#about").addEventListener('click', () => {
   infoMenu.cleanRootElement();
   infoMenu.printProfessorCard();
   infoMenu.printStudentsCards();
   infoMenu.printReportsAccordions();
   document.querySelector("#play").style.display = 'none';
   document.querySelector("#reset").style.display = 'none';
   document.querySelector("#term").innerHTML = '';
});


