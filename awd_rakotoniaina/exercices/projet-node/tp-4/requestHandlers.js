function start(res){
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    res.write("function start");
    res.end();
}

function upload(res){
    res.write("function upload");
    res.end();
}

exports.start = start;
exports.upload = upload