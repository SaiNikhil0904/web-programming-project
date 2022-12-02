let express = require("express")
let path = require("path")
let hbs = require("hbs")


let app = express()

app.set("view engine", "hbs")

app.use(express.static (path.join(__dirname, "public")))
app.use('/image', express.static('image'));



app.set("views",path.join(__dirname, "/template/views"))
hbs.registerPartials(path.join(__dirname, "/template/partials"))
hbs.registerPartials(path.join(__dirname, "/template/partial"))
// above statement is not needed if you are using ejs

app.get("/", (req,res)=>{
    res.render("home", {
        "username":"karan"
    })
})

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contactus", function (req, res) {
    res.render("ContactUs");
});

app.get("/product1", function (req, res) {
    res.render("product1");
});

app.get("/product", function (req, res) {
    res.render("product");
});

app.get("/arrivals", function (req, res) {
    res.render("arrivals");
});

app.get("/signup", function (req, res) {
    res.render("Main Page");
});

app.get("/signin", function (req, res) {
    res.render("Main Page2");
});

app.get("/*", function (req, res) {
    res.render("error");
});

app.listen("3000", ()=>{
    console.log('connected to server...')
    console.log(__dirname)
})