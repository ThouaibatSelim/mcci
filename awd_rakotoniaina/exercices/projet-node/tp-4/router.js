function router(handle, pathname, res){
    if(typeof handle[pathname] === 'function'  ){
        console.log("Route called for " + pathname);
        handle[pathname](res); // call the function
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("404 Not Found");
        res.end();
    }
}

exports.router = router;