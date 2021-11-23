let assert = require("assert");
const pg = require("pg");
let AvoShopper = require("../avo-shopper");
const Pool = pg.Pool;
require('dotenv').config()

const connectionString = process.env.DATABASE_URL || 'postgresql://avos:avos123@localhost:5432/avo_shopper';

const pool = new Pool({
    connectionString
});

const avoShopper = AvoShopper(pool);

module.exports = function AvoRoutes(){
    async function home(req, res){
        res.render("index",{
            shops: avoShopper.listShops()
        })
    }
    async function shops(req, res){
            res.render("screen2",{
        })
    }
    async function choose(req, res){
            res.render("screen3",{
        
        })
    }
    async function deals(req, res){
            res.render("screen4",{

        })
    }
    return{
        home,
        shops,
        choose,
        deals
    }
}