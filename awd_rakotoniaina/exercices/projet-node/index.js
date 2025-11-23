const server = require("./server");
const router = require("./router");
const handlers = require("./requestHandlers");

const handle = {
    start: handlers.start,
    upload: handlers.upload
};

server.start(router.route, handle);
