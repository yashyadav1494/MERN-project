const express=require('express')
const app=express();
const mongoose=require("mongoose")
const bodyparse=require("body-parser")
const bcrypt = require('bcryptjs'); // Import bcryptjs
const jwt = require('jsonwebtoken');
const http = require("http");
const { Server } = require("socket.io");
require('dotenv').config();
//const dotenv = require("dotenv");
const cors=require('cors')
app.use(cors())
//adding new line
                  //  const authRoutes = require('./routes/authRoutes.js'); // Import the auth routes
                  //  dotenv.config();

//----------------------------------------------------------------------------------------
//const port = process.env.PORT || 2002;
//----------------------------------------------------------------------------------------
const EmployeeModel=require('./organicfood.js')


mongoose.connect("mongodb://127.0.0.1:27017/OrganicFoodCompany");  //databasename-API

app.use(bodyparse.urlencoded({extended:true}));
app.use(bodyparse.json());



//send data from server to client
app.get("/",(req,res)=>
{
    res.send("Welcome to organic food company");
})
//data send from client to server
app.post("/create",async(req,res)=>
{
  try{
    const data=new EmployeeModel(req.body);
    await data.save();
    res.status(200).send(data);

  }catch(err)
  { 
    console.log(err);
}
})

app.get("/list",async(req,res)=>
{
   try{
             const data=  await EmployeeModel.find();   //db.Employee.find();
             res.send(data);
       
   }catch(err)
   {
    console.log(err);
   }
}
)

app.get("/list/:id",async(req,res)=>
{
  try{

      const data1=await EmployeeModel.findById(req.params.id);
      res.send(data1);
  } catch(err)
  {
    console.log(err)
  }   
})

app.delete("/delete/:id",async(req,res)=>
{
    try{
        const del=await EmployeeModel.findByIdAndDelete(req.params.id);
        res.send("Data is delteted");
    }
    catch(err) {
        res.status(404).send({message:"Employee not found"});
    }})
    
app.put("/list/:id",async(req,res)=>
    {
        try{
            const emp=await EmployeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.send(emp);
        }
        catch(err){
            res.status(404).send({message:"Employee not found"}); }
    })


//-------------------------------------------------------------------------------------------------------------

//     // Create an order
app.post("/creating", async (req, res) => {
  try {
    const order = new EmployeeModel(req.body);
    await order.save();
    res.status(200).send(order);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error creating order" });
  }
});

// Get all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await EmployeeModel.find();
    res.status(200).send(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error fetching orders" });
  }
});

// Update order status (e.g., canceling an order)
app.put("/orders/:id", async (req, res) => {
  try {
    const updatedOrder = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating order" });
  }
});

//---------------------------------------------------------------------------
// Backend example using Express.js
// Update order status (e.g., canceling an order)
app.put("/orders/:id", async (req, res) => {
  try {
    const order = await EmployeeModel.findById(req.params.id);
    
    // Check if the order is within the cancellable time window (e.g., 10 minutes)
    const orderCreationTime = new Date(order.createdAt).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - orderCreationTime) / 60000; // Convert to minutes

    if (timeDifference > 10) { // Allow cancellation only within 10 minutes
      return res.status(400).send({ message: "Order cannot be canceled after 10 minutes." });
    }

    // Proceed with canceling the order
    order.status = "Canceled"; // Or whatever status you use to mark cancellation
    const updatedOrder = await order.save();
    res.status(200).send(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating order" });
  }
});






//----------------------------------------------------------------------------

const Subscription=require('./Subscription.js')

// Route to subscribe user
// Route to subscribe user
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  // Check if email already exists
  const existingEmail = await Subscription.findOne({ email });
  if (existingEmail) {
    return res.status(400).send({ success: false, message: "This email is already subscribed!" });
  }

  try {
    // Save the email to MongoDB
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    res.send({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).send({ success: false, message: "Internal server error." });
  }
});


//------------------------------------------------------------------------------------------------------
const contactRoute = require('./routes/Contact');
// Routes
app.use('/api/contact', contactRoute);

//-------------------------------------------------------------------------------------------------------
const Inquiry = require('./Inquiry.js');
// API endpoint to handle form submissions
app.post('/api/inquiries', async (req, res) => {
  const { name, email, inquiry } = req.body;

  try {
    // Create a new inquiry document
    const newInquiry = new Inquiry({ name, email, inquiry });

    // Save the inquiry to the database
    await newInquiry.save();

    res.status(200).send({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error submitting inquiry', error });
  }
});

//-----------------------------------------------------------------------------------------------------
          // const dotenv = require("dotenv");
          // const authRoutes = require("./routes/authRoutes.js");

          // dotenv.config();
          // // Use the Auth Routes
          // app.use("/api/auth", authRoutes);

//-------------------------------------------------------------------------------------------------------

const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

//-------------------------------------------------------------------------------------------------------

const donationRoutes = require('./routes/donationRoutes.js');
app.use('/api/donations', donationRoutes);

//---------------------------------------------------------------------------------------------------------

const User = require('./middleware/models/User.js'); // User model
const moment = require('moment'); // Optional: For formatted date and time (requires installing 'moment' package)

app.post('/api/users/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists!' });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
          username,
          email,
          password: hashedPassword,
      });

      await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: User.id }, // Payload data
        process.env.JWT_SECRET_KEY, // Secret key from environment variable
        { expiresIn: '1h' } // Optional, expiration time
      );

      //console.log(token);

      // Get the current date and time (using Moment.js for formatting, or use JavaScript's built-in Date)
      const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss'); // Format: '2025-01-09 15:30:00'

      res.status(201).json({
          message: 'User created successfully',
          token,
          signUpDateTime: currentDateTime, // Add date and time in response
      });
  } catch (error) {
      console.error('Error during signup process:', error); // Log the error to the console

      // Send a more specific error message based on the error
      if (error.name === 'MongoError' && error.code === 11000) {
          return res.status(400).json({ message: 'User already exists!' });
      }
      
      res.status(500).json({ message: 'Internal server error' });
  }
});

//-------------------------------------------------------------------------------------------------
app.post('/api/users/signin', async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'User not found!' });
      }

      // Compare the password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid password!' });
      }

      // Generate JWT token
      const token = jwt.sign(
          { userId: user._id }, // Payload data (user ID)
          process.env.JWT_SECRET_KEY, // Secret key
          { expiresIn: '1h' } // Optional, expiration time
      );

      

      res.status(200).json({ message: 'Login successful',
         token,
       });

  } catch (error) {
      console.error('Error during signin process:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

//----------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------



const nodemailer = require('nodemailer');
//const jwt = require('jsonwebtoken');
//const User = require('./middleware/models/User.js');  // Make sure User model is imported

app.post('/api/users/forgot-password', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    try {
        // Find the user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found!' });
        }

        // Generate a password reset token (valid for 1 hour)
        const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Set up the email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            }
        });

        // Create the email content
        const mailOptions = {
            to: email,
            subject: 'Password Reset Request',
            text: `Hello, \n\nClick the following link to reset your password: ${process.env.BASE_URL}/reset-password/${resetToken}\n\nThis link will expire in 1 hour.`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending reset email' });
            }
            res.status(200).json({ message: 'Reset link sent to your email' });
        });

    } catch (error) {
        console.error('Error during forgot password process:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//--------------------------------------------------------------------------------------------
const branchRoutes = require('./routes/branchRoutes');
const companyInfoRoutes = require('./routes/companyInfoRoutes');
// Routes
app.use('/api/branches', branchRoutes);
app.use('/api/company-info', companyInfoRoutes);

//--------------------------------------------------------------------------------------------
// Import your search route
const searchRoute = require('./routes/searchRoute.js');  // Adjust path as necessary
// Use the search route
app.use('/api', searchRoute);  // Now your search route is available at /api/search


//-------------------------------------------------------------------------------------------



app.use("/api/admin", require("./routes/adminRoutes.js"));


//-------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------

// Order Schema
const orderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  userAddress: { type: String, required: true },
  orders: { type: Array, required: true },
  totalBill: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

// Create Order API
app.post("/api/orders/create", async (req, res) => {
  try {
    const { userName, userEmail, userPhone, userAddress, orders } = req.body;

    if (!userName || !userEmail || !userPhone || !userAddress || !orders || orders.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const totalBill = orders.reduce((acc, order) => acc + order.total, 0);

    const newOrder = new Order({
      userName,
      userEmail,
      userPhone,
      userAddress,
      orders,
      totalBill,
      status: "Confirmed",
    });

    await newOrder.save();
    res.json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// Fetch Order History API
app.get("/api/orders/history", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ orders });
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({ message: "Failed to fetch order history", error: error.message });
  }
});

//----------------------------------------------------------------------------------------------------

// Models
const Admin1 = mongoose.models.Admin || mongoose.model("Admin", new mongoose.Schema({
  email: String,
  password: String,
}));

const Order1 = mongoose.models.Order || mongoose.model("Order", new mongoose.Schema({
  date: String,
  totalPrice: Number,
}));

const User1 = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String,
}));


// Middleware for Admin Authentication
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Access Denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      req.adminId = decoded.id;
      next();
  });
};

// Admin Login
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin1.findOne({ email });

  if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Admin Dashboard Data
app.get("/api/admin/dashboard", verifyAdmin, async (req, res) => {
  try {
      const totalOrders = await Order1.countDocuments();
      const totalUsers = await User1.countDocuments();
      const totalRevenue = (await Order1.find()).reduce((sum, order) => sum + order.totalPrice, 0);

      const orderStats = await Order1.aggregate([
          { $group: { _id: "$date", orders: { $sum: 1 } } },
          { $sort: { _id: 1 } }
      ]);

      res.json({ totalOrders, totalUsers, totalRevenue, orderStats });
  } catch (error) {
      res.status(500).json({ message: "Server Error", error });
  }
});








app.listen(2002);    
console.log("Server Listening");
