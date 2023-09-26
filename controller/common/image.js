const commonUploadFunction = require(`../../helper/fileUploadHelper`)

module.exports = {
    uploadImage: async (req, res) => {
        try {
            const originalData = req.body.data;
            const image = req.files?.image;
            const path = "uploads/";
            console.log("data : ", image);
            // const log = await commonFunction.saveLogToFile(`\n file Info : ${image}`);
            if (!image) {
                return res.json({
                    status: false,
                    message: "A images required. Please try again.",
                });
            }
            const uploadToAWS = await commonUploadFunction.uploadMaterialToAWS(
                image,
                path
            );
            // console.log("uploadToAWS : ",uploadToAWS)
            // console.log(fileData);
            if (uploadToAWS.status) {
                // const cipherText = await commonFunction.encode(uploadToAWS.data);
                return res.json({
                    status: true,
                    message: "An Image added successfully.",
                    data: uploadToAWS.data,
                });
            } else {
                return res.json({
                    status: false,
                    message: uploadToAWS.message,
                });
            }
        } catch (Err) {
            console.log(Err);
            return res.json({
                status: false,
                message: "Something is wrong in upload Image.Please try again.",
                error: Err,
            });
        }
    },
};