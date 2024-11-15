import express from 'express'
import multer from 'multer'
const router = express.Router()
import path from 'path'

// diskStorage algo for multer and path.
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

// algo that checks for duplicate image uploads and filters to jpg, jpeg, and png only.
// if user attempts to upload file not listed in algo,
// then cb will return message Images Only!
function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png|webp/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype) {
        return cb(null, true)
    } else {
        cb('Images only!')
    }
}

// upload variable that checks filetype.
// this is all functions and variables from path and multer.
const upload = multer({
    storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
})

// router configuration for route in server.js
// res send returns file path name.
router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})

export default router