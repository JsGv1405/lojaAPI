import express from 'express'
import fileUpload from 'express-fileupload'
import { uploadFile } from './s3.js'

const app = express()

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))


app.post('/files', async (req, res) => {
    const result = await uploadFile(req.files.file)
    res.json({ result })
})

app.use(express.static('images'))

app.listen(3001)
console.log(`Server on port ${3001}`)