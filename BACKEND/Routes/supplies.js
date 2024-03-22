const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const resource = require("../Modals/Supply.js")
const multer = require('multer')
const path = require('path');
const fetchuser = require('../MiddleWare/fetchUser')

//API FOR GETTING ALL RESOURCES--->

router.get('/get_supplies', async (req, res) => {
  const data = await resource.find();
  res.send(data);

});

//API for getting all Resources of a particular user--->

router.get('/get_particular_user_supplies', fetchuser, async (req, res) => {
  const enrollment=req.user.enrollment;
  const get_supplies = await resource.find({ enrollment });
  res.json(get_supplies);
})

//API FOR POSTING SUPPLIES--->

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post('/add_supplies', fetchuser, upload.array('files', 5), async (req, res) => {
  const { title, description } = req.body;
  const files = req.files.map(file => file.path); // Get file paths

  try {
    const enrollment = req.user.enrollment;
    const newFile = new resource({ title, description, files, enrollment: enrollment });

    await newFile.save();

    res.status(200).json({ message: 'Supplies added successfully.' });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'Failed to upload files.' });
  }
});

//API for updating --->

router.put('/update_supplies/:id', fetchuser, upload.array('files', 5), async (req, res) => {
  const { title, description } = req.body;
  const files = req.files.map(file => file.path);

  try {
    const fileId = req.params.id;
    const updatedFile = await resource.findByIdAndUpdate(fileId, { title, description, files });

    if (!updatedFile) {
      return res.status(404).json({ error: 'File not found.' });
    }

    res.status(200).json({ message: 'Supplies  updated successfully.' });
  } catch (error) {
    console.error('Error updating Supplies:', error);
    res.status(500).json({ error: 'Failed to update Supplies.' });
  }
});

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//API FOR DELETING THE SUPPLIES--->

router.delete('/delete_supply/:id', fetchuser, async (req, res) => {
  try {
      let supply = await resource.findById(req.params.id);
      if (!supply) { return res.status(404).send("Not Found") }
      // Allow deletion only if user owns this Note
      if (Internship.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }
      supply = await resource.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Supply has been deleted" });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

module.exports = router