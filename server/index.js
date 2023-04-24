import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


import User from './models/User.js';
import TyPdf from './models/TyPdf.js';
import SyPdf from './models/SyPdf.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected to MongoDB');
})


// api routes starts here
// signup api starts here
app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

// validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }

// validation to check if all fields are filled ends here


// validation to check if email already exists starts here
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
// validation to check if email already exists ends here

// validation to check if phone already exists starts here
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
// validation to check if phone already exists ends here

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })
})
// signup api ends here

//  login api starts here
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });
    
    if(existingUser){
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else
    {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})
//  login api ends here


// CRUD Operation starts here...
// Create or ADD PDF api starts here
app.post("/createTyPdf", async(req,res)=>{
    const {title, description,pdfUrl,imgUrl,year,faculty} = req.body;
    
    const tyPdfs = new TyPdf({
        title: title,
        description: description,
        pdfUrl: pdfUrl,
        imgUrl: imgUrl,
        year: year,
        faculty: faculty
    })

    const savedPdf = await tyPdfs.save();

    res.json({
        success: true,
        message: "PDF added successfully",
        data: savedPdf
    })
})
// Create or ADD PDF api ends here

app.post("/createSyPdf", async(req,res)=>{
    const {title, description,pdfUrl,imgUrl,year,faculty} = req.body;
    
    const syPdfs = new SyPdf({
        title: title,
        description: description,
        pdfUrl: pdfUrl,
        imgUrl: imgUrl,
        year: year,
        faculty: faculty
    })

    const savedPdf = await syPdfs.save();

    res.json({
        success: true,
        message: "PDF added successfully",
        data: savedPdf
    })
})
// All Sy Pdfs fetching api starts here

app.get("/SyallPdfs", async(req, res)=>{
    const syPdfs = await SyPdf.find()

    res.json({
        success: true,
        message: "Pdf Items fetched successfully",
        data: syPdfs
    })
})
// All Sy Pdfs fetching api ends here


// All Ty Pdfs fetching api starts here
app.get("/TyallPdfs", async(req, res)=>{
    const tyPdfs = await TyPdf.find()

    res.json({
        success: true,
        message: "Pdf Items fetched successfully",
        data: tyPdfs
    })
})
// All Ty Pdfs fetching api ends here

// Pdfs Search by title
// http://localhost:5000/pdfsbytitle?title=Operating System
app.get("/pdfsbytitle", async(req, res)=>{
    const {title} = req.query;

    const tyPdfs = await TyPdf.find({
        title: {$regex: title, $options: 'i'}
    })

    res.json({
        success: true,
        message: "pdfs fetched successfully",
        data: tyPdfs
    })
})

// Food item Search by category
// http://localhost:5000/pdfsbyyear?year=Third-Year
app.get("/pdfsbyyear", async(req, res)=>{
    const {year} = req.query;
  
    const tyPdfs = await TyPdf.find({
        year: {$regex: year, $options: 'i'}
    })
  
      res.json({
          success: true,
          message: "pdfs fetched successfully",
          data: tyPdfs
      })
})


// api routes ends here

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})