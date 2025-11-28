const fs = require("fs");
const formidable = require("formidable");
const path = require("path");

//Handler start
function start(response, request) {


    console.log("Handler start");

    fs.readFile("./views/form.html", "utf8", (err, data) => {

        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            return response.end("Erreur chargement du fichier");
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });
}



// Handler Upload 
function upload(response, request) {

    console.log("Handler upload appelé");

    if (request.method.toLowerCase() !== "post") {
        response.writeHead(200, { "Content-Type": "application/json" });
        return response.end(JSON.stringify({ success: false }));
    }

    // Configuration du formulaire formidable
    const form = new formidable.IncomingForm({
        uploadDir: "./uploads",
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024 // 10 Mo
    });

    form.parse(request, (err, fields, files) => {

        if (err || !files.file) {
            console.log("Erreur upload :", err);
            response.writeHead(200, { "Content-Type": "application/json" });
            return response.end(JSON.stringify({ success: false }));
        }

        const file = files.file[0];
        const fileName = path.basename(file.filepath);

        response.writeHead(200, { "Content-Type": "application/json" });
        return response.end(JSON.stringify({
            success: true,
            file: fileName
        }));
    });
}



// Export des handlers
exports.start = start;
exports.upload = upload;
