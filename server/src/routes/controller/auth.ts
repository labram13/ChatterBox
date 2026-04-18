import express from 'express'
import pool from '../../config/db'
import bcrypt from 'bcrypt'

const router = express.Router();


type User = {
    username:string,
    email:string,
    password:string
}

type RegisterResponse = {
    message: string
}

router.post('/', async (req, res) => {

    const newUser: User = req.body.newUser

    //check for username if it exists
    const usernameExists = await pool.query(
        'SELECT * FROM users where username = $1',
        [newUser.username]
    )

    console.log(usernameExists.rows)

    if (usernameExists.rows.length !== 0) {
        return res.status(400).json({message: "user exists"})
    }

    //check for email if it exists

    const emailExists = await pool.query(
        'SELECT * FROM users where email = $1',
        [newUser.email]
    )

    if (emailExists.rows.length !== 0) {
        return res.status(400).json({message: "email exists"})
    }

    const hashedPassword: string = await bcrypt.hash(newUser.password, 10)

    const addUser = await pool.query(
        'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)', 
        [newUser.email, newUser.username, hashedPassword]
    )

    
    res.status(200).json({status: 'success'})
})

export default router;