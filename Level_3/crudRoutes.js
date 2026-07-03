import  Router  from "express";
import fs from 'node:fs';

const router = Router();
const title = "User.json"

router.post("/user", (req, res) => {
    const {name} = req.body;
fs.writeFile(`Mark/${title}`, name, (err) => {
  if (err) throw err;
  console.log('The user has been saved!');
});
})

router.get("/users", (req, res) => {

})

router.get("/user/:id", (req, res) => {

})

router.put("/user/:id", (req, res) => {

})

router.delete("/user/:id", (req, res) => {

})