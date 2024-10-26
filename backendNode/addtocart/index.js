const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const app = express();
app.use(cors());

app.options('*', cors());


const port = 8081 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

app.get('/',(re,res)=> {
    return res.json("hello From Backend ");
});


app.post("/addtocart", (req, res) => {
    const sql = "INSERT INTO productscart(`idProduct`,`img`,`title`,`number`,`discount`,`price`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.img,
        req.body.title,
        req.body.number,
        req.body.discount,
        req.body.price,
    ];
    const checkIfExistsQuery = "SELECT * FROM productscart WHERE idProduct = ?";
    db.query(checkIfExistsQuery, [req.body.id], (err, result) => {
        if (err) {
            return res.json({ Message: "Error in Node" });
        }
        if (result.length > 0) {
            return res.json({ Message: "Item is already added to cart" });
        }
        db.query(sql, [values], (err, result) => {
            if (err) {
                return res.json({ Message: "Error in Node" });
            }
            return res.json(result);
        });
    });
});


app.listen(port,()=>{
    console.log("Server is running on port 8083");
})
