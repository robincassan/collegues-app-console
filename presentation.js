var aff = console.log

// récupération du module `readline`
var readline = require('readline');
var service = require('./service');


// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    aff("1. Rechercher un collègue par nom");
    aff("99. Sortir");

    // récupération de la saisie utilisateur
    rl.question('choix :', function (saisie) {

        switch (saisie) {
            case '1':
                // la variable `saisie` contient la saisie effectuée
                rechercherCollegue();
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
function rechercherCollegue() {
    rl.question('nom :', function (saisie) {
        var nom = saisie;
        service.rechercherColleguesParNom(nom, function (colleguesTrouves) {

            // affichage du tableau des collègues trouvés
            console.log(colleguesTrouves);
            start();
        });
    });

}





exports.start = start;