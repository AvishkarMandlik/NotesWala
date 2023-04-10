import {Schema, model} from 'mongoose';

const pdfSchema = new Schema({
  title: String,
  description: String,
  pdfUrl: String,
  imgUrl:String,
  year: String,

  faculty: String
})

const Pdf = model("Pdf", pdfSchema)

export default Pdf