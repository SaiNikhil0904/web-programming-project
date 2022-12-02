let path = require ("path")

let express = require("express");
let app = express();

var public = path.join(__dirname, "public");

app.use('/image', express.static('image'));



app.get("/", function (req, res) {
    res.sendFile(path.join(public, "/home.html"));
});
app.use('/', express.static(public));

app.get("/about", function (req, res) {
    res.sendFile(path.join(public,"/about.html"));
});
app.use('/about', express.static(public));

app.get("/arrivals", function (req, res) {
    res.sendFile(path.join(public, "/arrivals.html"));
});
app.use('/arrivals', express.static(public));

app.get("/product", function (req, res) {
    res.sendFile(path.join(public, "/product.html"));
});
app.use('/product', express.static(public));

app.get("/signup", function (req, res) {
    res.sendFile(path.join(public, "/Main Page.html"));
});
app.use('/signup', express.static(public));

app.get("/contactus", function (req, res) {
    res.sendFile(path.join(public, "/ContactUs.html"));
});
app.use('/contactus', express.static(public));

app.get("/product1", function (req, res) {
    res.sendFile(path.join(public, "/product1.html"));
});
app.use('/product1', express.static(public));

app.get("/signin", function (req, res) {
    res.sendFile(path.join(public, "/Main Page2.html"));
});
app.use('/signin', express.static(public));

app.get("/*", function (req, res) {
    res.sendFile(path.join(public, "/error.html"));
});
app.use('/*', express.static(public));

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
    console.log(path.join(__dirname, "public"))
});