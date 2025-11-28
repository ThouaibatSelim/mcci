// server.js

// Import des modules nécessaires
const http = require("http");
const url = require("url");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

// La fonction start sera appelée depuis index.js
function start() {

    // Fonction exécutée à chaque requête HTTP
    function onRequest(request, response) {

        // Récupération du pathname dans l'URL
        const myURL = new URL(request.url, `http://${request.headers.host}`);
        const pathname = myURL.pathname;

        // Appel du router avec les paramètres nécessaires
        router.route(pathname, requestHandlers, response, request);
    }

    // Création du serveur et lancement sur le port 8882
    http.createServer(onRequest).listen(8882);
    console.log("Serveur lancé sur le port http://localhost:8882/.");
}

// Export de la fonction start
exports.start = start;