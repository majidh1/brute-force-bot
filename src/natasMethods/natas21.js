const fs = require('fs');
exports.getDynamicOptions = (options,response)=>{
    if(response){
        options.url = options.url.replace("-experimenter","");
    }else{
        options.url = options.url.replace("natas21","natas21-experimenter");
    }

    return options;
}