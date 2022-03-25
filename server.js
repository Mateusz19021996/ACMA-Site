const express = require("express");
const path = require("path");
const app = express();

//jeżeli strona ma static w sobie, to używamy poniższego patha
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// express.static(path.resolve(__dirname, 'frontend', 'static'),
//   {extensions: ["js"]});

// każda ściezka idzie do index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
});



app.listen(process.env.PORT || 5075, () => console.log("Server działa..."));
