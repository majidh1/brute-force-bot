const {start} = require("./start");
const {getOptions} = require("./options");

start(getOptions(process.argv[2],process.argv[3]))