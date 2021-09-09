import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import crypto from 'crypto'

aws.config.update({
  secretAccessKey: process.env.AWSSECRET_KEY,
  accessKeyId: process.env.AWSACCESS_KEY,
  region: process.env.AWSREGION
})

const s3 = new aws.S3({})

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWSBUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function(req, file, cb){
      cb(null, {fieldName: file.fieldname})
    },
    key: function(req, file, cb){
      crypto.randomBytes(15, (err, hash) => {
        if(err) cb(err);
        const fieldname = `${hash.toString('hex')}-${file.originalname}`
        cb(null, fieldname)
      })
    }
  })
})

export default upload;