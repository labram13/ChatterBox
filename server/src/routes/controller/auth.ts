import express from 'express'
import pool from '../../config/db'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();


type NewUser = {
    username:string,
    email:string,
    password:string
}

type RegisterResponse = {
    message: string
}

router.post('/', async (req, res) => {


    const newUser: NewUser = req.body.newUser

    //check for username if it exists
    const usernameExists = await pool.query(
        'SELECT * FROM users where username = $1',
        [newUser.username]
    )

    // console.log(usernameExists.rows)

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
        'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *', 
        [newUser.email, newUser.username, hashedPassword]
    )

    const user = addUser.rows[0]
    const {password, ...userWithoutPassword} = user
    console.log(userWithoutPassword);
    console.log("test123123")

    
    res.status(200).json({status: 'success'})
})


export default router;