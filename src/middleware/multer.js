const Multer = require("multer");
const path = require("path");

const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
const maxFileSize = 2 * 1024 * 1024;

const generateUploadImageMulter = (uploadPath) => {
  const storage = Multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationPath = path.join(__dirname, "..", uploadPath);
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      const sanitizedFileName = sanitizeFileName(file.originalname);
      cb(null, Date.now() + "-" + sanitizedFileName);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de archivo no permitido"), false);
    }
  };

  return Multer({
    storage,
    fileFilter,
    limits: { fileSize: maxFileSize },
  });
};

const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^\w.-]/g, "_");
};

const uploadUserImages = generateUploadImageMulter("assets/images/userImages");
const uploadFeedbackImages = generateUploadImageMulter(
  "assets/images/feedbackImages"
);
const uploadEventImages = generateUploadImageMulter(
  "assets/images/eventImages"
);

module.exports = { uploadEventImages, uploadUserImages, uploadFeedbackImages };
