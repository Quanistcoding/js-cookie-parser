function cookie_parser(cookie){
    var obj = {};
    var arr = [];
    if(cookie){
    cookie.split(';').forEach(x=>{
        arr.push(x.split('='));
    })
    arr.forEach(x=>{
        obj[x[0].replace(" ","")] = x[1]
    })}
    return obj;

};

exports.cookie_parser = cookie_parser;
