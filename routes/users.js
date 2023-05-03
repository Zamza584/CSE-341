const userSchema = require("../DB/userSchema");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new userSchema(user);
  try {
    await userModel.save();
    res.json(userModel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await userSchema.find();
    res.json(allUsers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
