const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/', upload.single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file
  res.status(200).json({
    name: originalname,
    type: mimetype,
    size
  })
})

module.exports = router
