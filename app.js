const axios = require('axios');
var argv = require('minimist')(process.argv.slice(2));

const options = {
    url: "",
    method: "POST",
    body: {},
    searchParams:[],
    captchaUrl: "",
    captchaMethod: "",
    captchaPropName: "",
    stopOnSuccess: true
};
Object.assign(options,argv);
console.log(options);

// Make a request for a user with a given ID
axios(options.url,{
    method: options.method,
    body: options.body
})
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });