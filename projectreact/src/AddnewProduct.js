import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddnewProduct() {
    const [txt,setTxt]=useState({
     name:'',
     price:'',
     imageUrl:''
    })
    const navigate=useNavigate();
    function submitHandler(e)
    {
   e.preventDefault();
   console.log(txt);
   setTxt(txt);
   axios.post("http://localhost:2002/create",txt);
navigate('/')
    }
    function txtHandler(e)
    {
        var name=e.target.name;
        var value=e.target.value;
        setTxt({...txt,[name]:value})
        console.log(name);
        console.log(value);
    }
  return (
   <>
   <div className="container w-25">
   <form onSubmit={submitHandler}>
    <input type="text" name="name" onChange={txtHandler} placeholder="Product Name" className='mb-3'></input><br></br>
    <input type="text" name="price" onChange={txtHandler} placeholder="Enter Price" className='mb-3'></input><br></br>
    <input type="text" name="imageUrl" onChange={txtHandler} placeholder="Enter Image Url" className='mb-3'></input><br></br>
    
    <input type="submit" value="AddNewProduct" className="btn btn-success"></input>
   </form>
   </div>
   </>
  )
}

export default AddnewProduct;
