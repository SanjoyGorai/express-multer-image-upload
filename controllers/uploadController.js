export const uploadImage = (req, res) => {
    // If no file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }
  
    // Successfully uploaded file
    res.status(200).json({
      message: 'File uploaded successfully!',
      file: req.file,
    });
  };
  