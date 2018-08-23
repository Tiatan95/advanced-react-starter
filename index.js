let express = require("express");
let app = express();

app.use(express.static('public'));

app.listen(3002, () =>{
    console.log("Start Server")
})
