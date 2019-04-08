const express = require("express")

const User = require("../db/models/User")

const router = express.Router()


router.post('/register', async (req, res) => {

    const {name, email, password} = req.body

    const user = await User.create({
        name,
        email,
        password
    })

    res.json(user)
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = User.findOne({where: {email}})

    if (password !== user.password) {
        res.status(403).json('Wrong password bro')
    }

    const userPayload = {
        id: user.id,
        email: user.email,
        name: user.name,
        type: "authenticated"
    }

    const COOKIE_OPTIONS = {
        // domain: "", prevent access from client
        httpOnly: true,
        // only https
        secure: process.env.NODE_ENV === "production",
        // we can verify the source of the cookie
        signed: true
    }

    // name, payload, options
    res.cookie("token", userPayload, COOKIE_OPTIONS)

    res.json(user)
})


module.exports = router
