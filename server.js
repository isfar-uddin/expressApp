var express=require("express")
app =express()
app.get('/',function (req,res) {
    res.send("Hello World")
}).listen(3000,function () {
    console.log("Server running at port 3000")
})

app.get('/books',function(req,res){
    res.json({books:["a","b"]})
})