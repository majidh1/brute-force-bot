const axios = require('axios');
const FormData = require('form-data');
const querystring = require('querystring');

axios.interceptors.request.use((config) => {
    config.startTime = new Date().getTime();
    return config;
});

axios.interceptors.response.use((response) => {
    response.timing = new Date().getTime() - response.config.startTime;
    return response;
});

exports.start = (options) => {
    options = Object.assign({
        url: "",
        method: "GET",
        body: {},
        queryParams: {},
        searchParams: [],
        stopOnSuccess: false,
        stopOnChangeContent: true,
        stopOnChangeTiming: false,
        successTimingMin: 1000,
        isFormData: false,
        isQuerystring: false,
        authUsername: "",
        authPassword: "",
        listedChar: null,
        listedCharSeparator: ";",
        maxLen: 32,
        minLen: 32,
        prefixValue: "",
        suffixValue: "",
        ongoing: false,
        preventAppendToPrefixValue: false,
        prependMode: false,
        cookieStr: '',
        encodeType: "hex",
        findedByRegexInContent: "",
        refere: "",
        maxCount: 1
    }, options);
    options.hint && console.log("\x1b[33m%s\x1b[0m", "hint: " + options.hint);
    options.listedChar = options.listedChar?.split(options.listedCharSeparator || "");
    let contentLength = null;
    let lastResponse = null;
    let index = 0;

    dynamicValue = () => {
        if (index > options.listedChar.length) throw "index";
        return options.prefixValue + options.listedChar[index] + options.suffixValue
    }

    getDynamicBody = () => {
        let body = {};
        Object.assign(body, options.body);
        options.searchParams.forEach(param => body[param] = dynamicValue())

        if (options.isQuerystring) {
            body = querystring.stringify(body);
        }
        if (options.isFormData) {
            let data = new FormData();
            Object.keys(body).forEach(param => {
                return data.append(param, body[param]);
            });
            body = data;
        }
        return body;
    }

    getDynamicCookie = () => {
        if (!options.cookieStr) return "";
        if (options.listedChar && !options.listedChar[index]) throw "listedChar finished";
        let cookieValue = (options.listedChar && options.listedChar[index]) || "";
        if (options.encodeType) {
            cookieValue = (Buffer.from(cookieValue, 'utf8')).toString(options.encodeType);
        }
        return options.cookieStr.replace("#changed#", cookieValue)
    }

    sendRequest = () => {
        let natasMethods = null;
        try {
            natasMethods = require("./natasMethods/" + options.authUsername + ".js");
            if (!lastResponse) options.maxCount += 1;
        } catch { }
        if (natasMethods)
            options = natasMethods.getDynamicOptions(options, lastResponse);
        const body = getDynamicBody();
        axios(options.url, {
            method: options.method,
            data: body,
            params: options.queryParams,
            maxBodyLength: Infinity,
            auth: {
                username: options.authUsername,
                password: options.authPassword
            },
            headers: {
                'User-Agent': 'MAjidH1',
                'Cookie': getDynamicCookie(),
                "Referer": options.referer
            }
        })
            .then(function (response) {
                lastResponse = response;
                console.log("count: " + index)
                let isFounded = false;
                let foundedPass = "";
                if (options.stopOnChangeContent) {
                    if (contentLength === null) {
                        contentLength = response.data.length;
                    } else {
                        isFounded = contentLength !== response.data.length;
                    }
                }
                if (options.stopOnSuccess) {
                    isFounded = true;
                }
                if (options.stopOnChangeTiming) {
                    isFounded = response.timing > options.successTimingMin;
                }
                if (options.findedByRegexInContent) {
                    foundedPass = response.data.match(new RegExp(options.findedByRegexInContent, "g"));
                    isFounded = !!foundedPass;
                    console.log(response.data)
                }
                if (isFounded) {
                    console.log("finded: ", foundedPass);
                    if (options.cookieStr) console.log(getDynamicCookie())
                    if (options.ongoing) {
                        if (options.preventAppendToPrefixValue) options.listedChar = options.listedChar.replace(options.listedChar[index], "")
                        else {
                            if (options.prependMode) {
                                options.suffixValue = options.listedChar[index] + options.suffixValue
                            } else {
                                options.prefixValue += options.listedChar[index]
                            }
                        };
                        index = 0;
                    } else return;
                }
                index++;
                if (index >= options.maxCount) throw "Count_Over";
                sendRequest();
            })
            .catch(function (error) {
                throw error
            })
            .finally(function () {

            });
    }
    sendRequest();
}