var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandlers");
var handle = {};

handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;


server.start(router.router, handle);