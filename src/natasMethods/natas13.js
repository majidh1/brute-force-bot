const fs = require('fs');
exports.getDynamicOptions = (options,response)=>{
    if(response){
        const newUrl = response.data.match(/<a href="(.+)">upload/)[1];
        options.url += "/"+newUrl;
    }else{
        options.body.uploadedfile = {
            isFile : true,
            content: fs.readFileSync("./src/natasMethods/natas13.png"),
            fileName:"test.png",
            fileType: "image/png"
        };
    }

    return options;
}