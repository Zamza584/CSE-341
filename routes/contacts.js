const contactSchema = require("../DB/contactSchema");
const router = require("express").Router();

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
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const contact = contactSchema(req.body);
  try {
    const data = await contact.save();
    res.status(201).json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const data = await contactSchema.updateOne({ _id: id }, { $set: body });
    res.json(data);
  } catch (err) {
    res.status(204).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await contactSchema.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
