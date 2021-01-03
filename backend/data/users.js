import bcrypt from 'bcryptjs'
//import User from '../models/userModel.js'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bidur Bhurtel',
        email: 'bidurbhurtel@exampple.com',
        password: bcrypt.hashSync('123456', 10),       
    },
    {
        name: 'Anusha Bhattarai',
        email: 'anushabhattarai@example.com',
        password: bcrypt.hashSync('123456', 10),        
    }
]

export default users