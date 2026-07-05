import { Router } from "express";
import fs from 'node:fs';

const router = Router();

router.post("/user", async (req, res) => {
})

router.get("/users", (req, res) => {
  fs.readFile("user.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Unable to read users"
      });
    }

    const users = JSON.parse(data);

    return res.json(users);

  });

});

router.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("user.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Unable to read user"
      });
    }

    const users = JSON.parse(data);
    const user = users.find(user => user.id == id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.json(user);

  });
})

router.put("/user/:id", (req, res) => {

})

router.delete("/user/:id", (req, res) => {

})

export default router;