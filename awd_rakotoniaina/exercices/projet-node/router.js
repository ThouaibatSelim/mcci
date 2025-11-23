// router.js

function route(pathname, handlers, response, request) {

    console.log("Router: demande reçue pour " + pathname);

    // Si l'utilisateur va sur "/" on redirige vers "/start"
    if (pathname === "/") {
        pathname = "/start";
    }

    // On retire le "/" pour obtenir la clé du handler
    const handlerKey = pathname.replace("/", "");

    // Vérification si le handler existe
    if (typeof handlers[handlerKey] === "function") {

        handlers[handlerKey](response, request);

    } else {

        console.log("Aucun handler trouvé pour " + pathname);

        response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        response.write("<h1>404 Page non trouvée</h1>");
        response.write("<a href='/start'>Retour à l'accueil</a>");
        response.end();
    }
}

exports.route = route;
