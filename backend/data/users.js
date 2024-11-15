import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Steve Young',
        email: 'steve@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jon Baez',
        email: 'jon@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;