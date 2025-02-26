import React from "react";
import { BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Nav1 from "./Nav1";
import About from "./About";
import Explore from "./Explore";
import Review from "./Review";
import Home from "./Home";
import Menu2 from "./Menu2";
import OrderHistory from "./OrderHistory";
import AddnewProduct from "./AddnewProduct";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OrderHistory1 from "./OrderHistory1";
import Organics from "./Organics";
import Why from "./Why";
import Top10Reasons from "./Top10Reasons";
import FAQ from "./FAQ";
import DirtyLittleSecrets from "./DirtyLittleSecrets";
import OrganicSealComponent from "./OrganicSealComponent";
import ContactUs from "./ContactUs";
import Practice from "./Practice";
import OrganicLivestockRequirements from "./OrganicLivestockRequirements";
import OrganicFarmingPractices from "./OrganicFarmingPractices";
import We from "./We";
import OrderForm from "./OrderForm";
import Donate from "./Donate";
import ForgotPassword from "./ForgotPassword";
import AddProduct from "./AddProduct";



import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import AddNewfood from "./AddNewfood";









export default function App() {

  return (
    <>
    
      <BrowserRouter>
        <Nav1 />
  
      <Routes>


          <Route path="/signup" element={<SignUp></SignUp>}></Route>

          <Route path="/signin" element={<SignIn></SignIn>}></Route>

          <Route path="/home" element={<Home></Home>}>
                <Route path="enter" element={<Menu2></Menu2>}></Route>
                <Route path="Add" element={<AddnewProduct></AddnewProduct>}></Route>
          </Route>

          <Route path="/about" element={<About />}>
            <Route path="explore" element={<Explore />} />
            <Route path="review" element={<Review />} />
          </Route>

          <Route path="/basket" element={<OrderHistory></OrderHistory>}></Route>

           <Route path="/order-history" element={<OrderHistory1></OrderHistory1>}></Route>

            <Route path="/" element={<Organics></Organics>}>
                <Route path="organic" element={<Why></Why>}>
                     <Route path="why" element={<Top10Reasons></Top10Reasons>}></Route>
                     <Route path="faq" element={<FAQ></FAQ>}></Route>
                     <Route path="secrete" element={<DirtyLittleSecrets></DirtyLittleSecrets>}></Route>
                     <Route path="pestisides" element={<OrganicSealComponent></OrganicSealComponent>}></Route>
                </Route>

                <Route path="practice" element={<Practice></Practice>}>
                    <Route path="prac" element={<OrganicLivestockRequirements></OrganicLivestockRequirements>}></Route>
                    <Route path="farm" element={<OrganicFarmingPractices></OrganicFarmingPractices>}></Route>
                </Route>

                <Route path="we" element={<We></We>}></Route>

                <Route path="actions" element={<OrderForm></OrderForm>}></Route>

                <Route path="donate" element={<Donate></Donate>}></Route>

            </Route>

            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>

             <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>

             <Route path="/newadd" element={<AddProduct></AddProduct>}></Route>

             {/* ------------------------------------------------------------------------------------------ */}

             <Route path="/admin-login" element={<AdminLogin />} />
             <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
             <Route path="/admin-register" element={<AdminRegister />} />
             <Route path="/add-food" element={<AddNewfood></AddNewfood>}></Route>
             
            
            
        </Routes>
      </BrowserRouter>
    </>
  );
}