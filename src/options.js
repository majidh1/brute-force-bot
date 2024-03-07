const {getUserPass} = require('./pass');

exports.getOptions = (level,input) => {
    const userPass = getUserPass(level);
    if(!userPass) throw "Not_Existed_Level_"+level;
    const options = {
        url:`http://${userPass.user}.natas.labs.overthewire.org`,
        authUsername: userPass.user,
        authPassword: userPass.pass
    }
    const levelOptions = require("./natasOptions/"+userPass.user+".json")
    if(levelOptions.requiredFromCommand && input===undefined) throw "RequiredFromCommand "+levelOptions.errorLog;
    if(input){
        options[levelOptions.requiredFromCommand] = input;
    }
    return Object.assign(options,levelOptions||{})
}