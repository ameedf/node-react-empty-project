const express = require('express');
const router = express.Router()
const userRepo = require('./userRepo');
const bcrypt = require("bcrypt")

router.post('/register', async (req, res) => {
    const userData = req.body;
    try {
        const ifAdded = await userRepo.addNewUser(userData);
        if (ifAdded) {
            const addedUser = {
                ...userData
            };
            delete addedUser.password
            res.send(addedUser);
        }
    } catch (err) {
        res.status(400).send({ err });
    }
});

router.post('/login', async (req, res) => {
    const userLogInData = req.body;
    try {
        const ifUserIsRegistered = await userRepo.ifUserRegistered(userLogInData)
        if (ifUserIsRegistered) {
            await bcrypt.compare(userLogInData.userPassword, ifUserIsRegistered.password, (err, match) => {
                if (err) {
                    res.status(400).send({err});
                } else {
                    if (match) {
                        res.status(200).send(delete ifUserIsRegistered.password);
                    }else{
                        res.status(204)
                    }
                }
            })

        }else{
            res.status(404)
        }
    } catch (err) {
        res.status(409).send(err)
    }
})

module.exports = router;