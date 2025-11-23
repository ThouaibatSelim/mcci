const fs = require('fs');

// Handler pour "/start" - afficher le formulaire HTML
function start(response) {
    console.log("Handler 'start' called.");
    
    fs.readFile('./views/form.html', 'utf8', (err, data) => {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write("Erreur : fichier HTML non trouvé");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(data);
            response.end();
        }
    });
}

// Handler pour "/upload" - gestion POST simple + sauvegarde
function upload(response, request) {
    console.log("Handler 'upload' called.");

    if (request.method.toLowerCase() === "post") {

        let body = "";

        request.on("data", chunk => {
            body += chunk;
        });

        request.on("end", () => {

            fs.writeFile('./uploads/upload.txt', body, err => {
                if (err) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.write("Erreur lors de la sauvegarde du fichier");
                    return response.end();
                }

                // Réponse HTML stylée
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(`
<style>
    body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .upload-box {
        background: white;
        padding: 30px;
        width: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        text-align: center;
    }

    .upload-box h1 {
        color: #00ABE4;
        margin-bottom: 20px;
    }

    .btn {
        display: inline-block;
        padding: 10px 15px;
        background-color: #00ABE4;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        transition: 0.3s;
    }

    .btn:hover {
        background-color: #008bbd;
    }
</style>

<div class="upload-box">
    <h1>Fichier reçu !</h1>
    <a href="/start" class="btn">Retour</a>
</div>
                `);

                response.end();
            });
        });

    } else {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Envoyez un fichier via POST.");
        response.end();
    }
}


// Export des handlers
exports.start = start;
exports.upload = upload;
