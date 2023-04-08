import {Schema, model} from 'mongoose';

const PdfSchema = new Schema({
  title: String,
  description: String,
  pdfUrl: String,
  year: String,
  faculty: String
})

const Pdf = model("Pdf", PdfSchema)

export default PdfSchema