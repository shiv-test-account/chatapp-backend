const router = require("express").Router();

const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, picture } = req.body;
    console.log("Req Body:", req.body);

    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      picture,
    });

    res.status(201).json(user);
  } catch (e) {
    if (e.code == 11000) {
      msg = "User already exist";
    } else {
      msg = e.message;
    }

    console.log(e);
    res.status(400).json(msg);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Req Body:", req.body);

    const user = await User.findByCredentials(email, password);

    user.status = "online";

    await user.save();

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e.msg);
  }
});

module.exports = router;
