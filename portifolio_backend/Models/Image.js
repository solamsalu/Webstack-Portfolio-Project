var ImageSchema = new mongoose.Schema ({
   imgPath: { type: String, required: true }
 });
 module.exports = mongoose.model ('Image', ImageSchema);
 
 var image = new Image ();
 image.imgPath = 'E:\\ALX\\Webstack Portifolio Project\\frontend\\public\\img\\home\\image.jpg';
 image.save ();
 
 app.get ('/image/:id', (req, res) => {
   Image.findById (req.params.id, (err, image) => {
     if (err) return res.status (500).send (err);
     res.sendFile (image.imgPath);
   });
 });
 