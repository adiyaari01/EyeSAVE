var AWS = require("aws-sdk");
const consts = require('../constans' );
const catchAsync = require("../utils/catch.util")
const { AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY} = consts;

var s3 = new AWS.S3();
// var params = {Bucket: 'eyesave' Key: }

exports.getRecordings = catchAsync(async (req, res, next) => {
    // const recordings = await Children.find().lean();

    const s3 = new AWS.S3({
        accessKeyId: AMAZON_ACCESS_KEY_ID,
        secretAccessKey: AMAZON_SECRET_ACCESS_KEY,
    });
    const BUCKET_NAME = 'eyesave';

    const listObjectsInBucket = (bucketName) => {
        // Create the parameters for calling listObjects
        var bucketParams = {
            Bucket: bucketName,
        };
        
        // Call S3 to obtain a list of the objects in the bucket
        s3.listObjects(bucketParams, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
                return res.status(200).json({data:data})
            }
        });
    }
    listObjectsInBucket(BUCKET_NAME);
});
