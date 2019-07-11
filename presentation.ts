const aff = console.log

// récupération du module `readline`

import * as readline from 'readline';
import {rechercherColleguesParNom} from './service';


// création d'un objet `rl` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    aff('1. Rechercher un collègue par nom');
    aff('99. Sortir');

    // récupération de la saisie utilisateur
    rl.question('choix :', (saisie) => {

        switch (saisie) {
            case `1`:
                // la variable `saisie` contient la saisie effectuée
                rechercherCollegue();
                break;
            case `99`:
                aff(`Sortie du programme `);
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible

                break;
            default:
                aff(`choix inconnu`);
                start();
                break;
        }






    });
}
function rechercherCollegue() {
    rl.question('nom :', (nom) => {
        rechercherColleguesParNom(nom).then(collegues => {
            // affichage du tableau des collègues trouvés
            console.log(collegues);
            start();
        }).catch(err=>{
            
        });
});

}


export{
    start
};


