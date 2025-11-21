// Handler pour la route "/start"
function start(response) {
    console.log("Handler 'start' called.");

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Bienvenue sur la page Start");
    response.end();
}

// Handler pour la route "/upload"
function upload(response) {
    console.log("Handler 'upload' called.");

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Page Upload : le formulaire devrait envoyer ici");
    response.end();
}

// Export des handlers pour index.js et router.js
exports.start = start;
exports.upload = upload;
