var aff = console.log

// récupération du module `readline`
var readline = require('readline');


// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    aff("1. Rechercher un collègue par nom");
    aff("99. Sortir");

    // récupération de la saisie utilisateur
    rl.question('', function (saisie) {

        switch (saisie) {
            case '1':
                // la variable `saisie` contient la saisie effectuée
                aff(`Recherche en cours du nom `);
                start();
                break;
            case '99':
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




exports.start = start;