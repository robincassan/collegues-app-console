//  fichier responsable des données et de la communication avec l'extérieur. console.log interdit ici
var request = require('request');


function rechercherColleguesParNom(nomRecherche, callback) {

    request(`https://cassan-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`, { json: true }, function(err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);
    });

    // à noter que la fonction ne retourne rien ici
}

exports.rechercherColleguesParNom = rechercherColleguesParNom; 