g// La fonction "route" décide quoi faire pour chaque URL
function route(pathname, handlers, res, req) {

    console.log("Router: demande reçue pour " + pathname);

    // Est-ce qu'un handler existe pour cette route ?
    if (typeof handlers[pathname] === "function") {

        // Oui → on appelle cette fonction
        handlers[pathname](res, req);

    } else {

        // Non → on renvoie une erreur 404
        console.log("Aucun handler trouvé pour " + pathname);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
    }
}

// On exporte la fonction pour que server.js puisse l’utiliser
exports.route = route;
