const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const internship = require("../Modals/Internship")


//POST API FOR POSTING INTERNSHIP--->

router.post('/addinternship',
    [
        body('job_title', 'enter a valid title').isLength({ min: 3 }),
        body("job_description", "enter a valid description").isLength({ min: 3 }),

    ],
    async (req, res) => {
        try {
            const { job_title, job_description, job_type, job_location } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const data = new internship({
                job_title, job_description, job_type, job_location

            });
            const result = await data.save();
            res.send(result);

        } catch (error) {
            res.status(500).send("Internal Serval Error");
        }


    }
)

//API FOR SHOWING ALL INTERNSHIPS--->

router.get('/get_internships', async (req, res) => {
    const get_internships = await internship.find();
    res.send(get_internships);
})


//API FOR UPDATING INTERNSHIP--->

router.put('/update_internship/:id', async (req, res) => {
    try {
        const { job_title, job_description, job_type, job_location } = req.body;
        const updated_data = {};
        if (job_title) { updated_data.job_title = job_title };
        if (job_description) { updated_data.job_description = job_description };
        if (job_type) { updated_data.job_type = job_type };
        if (job_location) { updated_data.job_location = job_location };

        let Internship = await internship.findById(req.params.id);
        if (!Internship) { return res.status(404).send("Not Found") }

        Internship = await internship.findByIdAndUpdate(req.params.id, { $set: updated_data }, { new: true })
        res.json({ Internship });
    } catch (error) {
        res.status(500).send("Internal Serval Error");
    }
})

//API FOR DELETING THE INTERNSHIP FORM--->

router.delete('/delete_internship/:id', async (req, res) => {
    let Internship = await internship.findById(req.params.id);
    if (!Internship) { return res.status(404).send("Not Found") }


    Internship = await internship.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Internship has been deleted" });

})

module.exports = router