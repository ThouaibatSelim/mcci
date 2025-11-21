// Import des modules
const http = require("http");

// La fonction start sera appelée depuis index.js
function start(route, handlers) {

    // Fonction exécutée à chaque requête HTTP
    function onRequest(req, res) {

        // Récupération du pathname dans l'URL
        const myURL = new URL(req.url, `http://${req.headers.host}`);
        const pathname = myURL.pathname;


        // Appel du router avec les paramètres
        route(pathname, handlers, res, req);
    }

    // Création du serveur et lancement sur le port 8888
    http.createServer(onRequest).listen(8888);
    console.log("Serveur lancé sur le port 8888.");
}

// On exporte la fonction start pour l'utiliser ailleurs
exports.start = start;
