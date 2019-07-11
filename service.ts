//  fichier responsable des données et de la communication avec l'extérieur. console.log interdit ic

import * as request from 'request-promise-native';


function rechercherColleguesParNom(nomRecherche) {

    return request(`https://cassan-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`, { json: true })
    
    // à noter que la fonction ne retourne rien ici
}

export {
    rechercherColleguesParNom
};

