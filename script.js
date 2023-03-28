let coups =["PIERRE", "FEUILLE", "CISEAUX"];
let boutons = document.querySelectorAll("button")
let affichageCoupsJoues = document.querySelectorAll(".container-coups-joues h2");
let statutJeu = document.querySelector("#statut-jeu");
let scoreHtml = document.querySelectorAll(".score h2");
let score = {
  "ordi": 0,
  "joueur": 0,
};
commencerPartie();


function commencerPartie() {


    document.getElementById("statut-jeu").textContent = "Choisissez !";
    for(let i = 0; i < affichageCoupsJoues.length; i++) {
        boutons[i].textContent=coups[i];
        boutons[i].style.display = "inline-block";
        boutons[i].addEventListener("click", finirPartie);
    }

    for (let i = 0; i < affichageCoupsJoues.length; i++) {
        affichageCoupsJoues[i].style.display = "none";
      }
    
      for (let i = 0; i < 2; i++) {
        scoreHtml[i].style.display = "none";
      }

}

/**
 * @param {Number}  
 * @param  {Number}   
 * @return {String}   
 */


function calculerResultat(monCoup, coupOrdi) {
    if(monCoup === coupOrdi){
        return "Egalité"
    } else if(monCoup === 0){
        if(coupOrdi === 1) {
            score["ordi"]+=1;
            return "Vous avez perdu"
        } else{
            score["joueur"]+=1;
            return "Vous avez gagné"
        }
    } else if (monCoup === 1){
        if(coupOrdi === 2){
            score["ordi"]+=1;
            return "Vous avez perdu"
        } else {
            score["joueur"]+=1;
            return "Vous avez gagné"
        }
    } else if(monCoup === 2){
        if(coupOrdi === 0) {
            score["ordi"]+=1;
            return "Vous avez perdu"
        } else{
            score["joueur"]+=1;
            return "Vous avez gagné"
        }
    }
}


/**
 * @return {Number}   nombre entier aléatoire entre 0 et 2
 */
function coupAleatoire() {
    return Math.floor(Math.random() * 3);
}





/**
 * @param{Event}
 */

function finirPartie() {

    let monCoup = coups.indexOf(event.target.textContent);
    let coupOrdi = coupAleatoire();

    statutJeu.textContent = calculerResultat(monCoup, coupOrdi);

    affichageCoupsJoues[0].style.display = "inline-block"
    affichageCoupsJoues[0].textContent = coups[monCoup];
    affichageCoupsJoues[1].style.display = "inline-block";
    affichageCoupsJoues[1].textContent = "vs.";
    affichageCoupsJoues[2].style.display = "inline-block";
    affichageCoupsJoues[2].textContent = coups[coupOrdi];

    scoreHtml[0].style.display = "inline-block";
    scoreHtml[0].textContent = score["joueur"];
    scoreHtml[1].style.display = "inline-block";
    scoreHtml[1].textContent = score["ordi"];

    boutons[0].style.display = "none";
    boutons[2].style.display = "none";



    boutons[1].textContent = "Rejouer!"

    boutons[1].removeEventListener("click", finirPartie);
    boutons[1].addEventListener("click", commencerPartie);

}