const contactSchema = require("../DB/contactSchema");
const router = require("express").Router();

//get all users
router.get("/", async (req, res) => {
  try {
    const allContacts = await contactSchema.find();
    res.json(allContacts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactSchema.findById(id);
    res.json(contact);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

module.exports = router;
