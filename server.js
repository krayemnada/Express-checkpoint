const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is runing on port ${PORT}`)
);

const middle = (req, res, next) => {
    const Temps = new Date();
    const days = Temps.getDay();
    const hours = Temps.getHours();
    console.log(days);
    if (days == 1 || hours < 9 || hours > 17 || days == 6) {
        res.send("<h1>Not available</h1>");
        // app.use(express.static("Public"));

        // app.get("/", (req, res) => {
        //     res.sendFile(__dirname + "/Public/Home.html");
        // });

        // app.get("/contact-us", (req, res) => {
        //     res.sendFile(__dirname + "/Public/Contact.html");
        // });

        // app.get("/our-services", (req, res) => {
        //     res.sendFile(__dirname + "/Public/Services.html");
        // });
    }
    next();
};

app.use(middle);
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is runing on port ${PORT}`)
);
