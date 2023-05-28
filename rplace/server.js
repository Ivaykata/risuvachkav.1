let canvas;
function make_canvas(n) {
    canvas = [];
    for(let i = 0; i < n; i++) {
        canvas[i] = [];
        for (let j = 0; j < n; j++) {
            canvas[i][j] = {
                r: 255,
                g: 255,
                b: 255
            }
        }
    }
}
function update_canvas(col, row, new_r, new_g, new_b) {
    canvas[col][row] = {
        r: new_r,
        g: new_g,
        b: new_b
    }
}
make_canvas(5);

const express = require ("express");
const path = require ("path")
const app = express() 
const port = 3000

app.get("/", function(req, res){
    console.log(__dirname)
    console.log(path.join(__dirname))
    console.log("get request")
    res.status(200);
    res.sendFile(path.join(__dirname, "public", "start.html"))

})
app.get("/game.js", function(req, res){
    res.sendFile(path.join(__dirname, "public", "game.js"))
})
app.get("/map",function(req, res){
    console.log("JSON.stringify(canvas)")
    res.status(400);
});
app.put("/risuvai",function(req,res){
    let X = parseInt(req.query.X),
        Y = parseInt(req.query.Y),
        R = parseInt(req.query.R),
        G = parseInt(req.query.G),
        B = parseInt(req.query.B);

    update_canvas(X,Y,R,G,B);
    res.status(200);
    res.send("Uspeshno risuvane")
});
app.listen(port, function(){
    console.log("listens on port" + port)
 });