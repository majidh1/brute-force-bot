const jsonNo  = '{"showpassword":"no","bgcolor":"#ffffff"}';
const jsonYes = '{"showpassword":"yes","bgcolor":"#ffffff"}';
const base64 = require('base-64');

const xorEncrypt = (input,key)=>{
    var text = input;
    var outText = '';

    for (var i = 0; i < text.length; i++) {
        outText += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }

    return outText;
}
const findKey=(xorResult)=>{
    let result = "";
    xorResult.split("").forEach((x,i)=>{
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("").forEach(char=>{
            if(result.length===4)return false;
            if(xorEncrypt(jsonNo,char)[i]===x)
                result+=char;
        });
    });
    return result;
}

exports.getDynamicOptions = (options,response)=>{
    if(!response) return options;
    const cookieName="data";
    const cookie = (response.headers['set-cookie'])
    .find(c => c.includes(cookieName))
    ?.match(new RegExp(`^${cookieName}=(.+);?`))[1];
    const xorResult = base64.decode(cookie.replace("%3D","="));
    const key = findKey(xorResult);
    const newCookie = base64.encode(xorEncrypt(jsonYes,key));
    console.log("key: "+key,"new data cookie: "+newCookie);
    options.cookieStr = `${cookieName}=${newCookie}`
    return options;
}