import multer from "multer";
import path from "path";
import crypto from "crypto";
import fs from "fs";



function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function imageFileFilter(
  _req: any,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("File harus berupa gambar"));
  }
  cb(null, true);
}

function createStorage(uploadDir: string) {
  ensureDir(uploadDir);

  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${crypto.randomUUID()}${ext}`);
    },
  });
}



const journeyUploadDir = path.join(process.cwd(), "uploads/journeys");

export const uploadJourneyImage = multer({
  storage: createStorage(journeyUploadDir),
  limits: {
    fileSize: 6 * 1024 * 1024, // 6MB
  },
  fileFilter: imageFileFilter,
});

 

const workUploadDir = path.join(process.cwd(), "uploads/works");

export const uploadWorkImage = multer({
  storage: createStorage(workUploadDir),
  limits: {
    fileSize: 7 * 1024 * 1024, // 7MB
  },
  fileFilter: imageFileFilter,
});
