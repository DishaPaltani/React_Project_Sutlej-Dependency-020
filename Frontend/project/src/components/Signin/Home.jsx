import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// const Home = () => {

//     const history = useNavigate();

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         date: "",
//         password: ""
//     })

   

//     const [data,setData] = useState([]);
//     console.log(inpval);

//     const getdata = (e) => {
//         // console.log(e.target.value);


//         const { value, name } = e.target;
//         // console.log(value,name);


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }

//     const addData = (e) => {
//         e.preventDefault();

//         const { name, email, date, password } = inpval;

//         if (name === "") {
//             toast.error(' name field is requred!',{
//                 position: "top-center",
//             });
//         } else if (email === "") {
//              toast.error('email field is requred',{
//                 position: "top-center",
//             });
//         } else if (!email.includes("@")) {
//              toast.error('plz enter valid email addres',{
//                 position: "top-center",
//             });
//         } else if (date === "") {
//              toast.error('date field is requred',{
//                 position: "top-center",
//             });
//         } else if (password === "") {
//              toast.error('password field is requred',{
//                 position: "top-center",
//             });
//         } else if (password.length < 5) {
//              toast.error('password length greater five',{
//                 position: "top-center",
//             });
//         } else {
//             console.log("data added succesfully");
//             history("/login")
//             localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

//         }
//         const addProductsToServer = async (product) => {
//             const sampleProducts = 
//               {
//                  "name": product.name,
//                 "email": product.email,
//                 "date": product.date,
//                 "password": product.password,
//                 "cart":{}
//               }
//             try {
//               const response = await axios.post('https://react-project-sutlej-dependency-020-3.onrender.com/users', sampleProducts);
//               console.log('Products added:', response.data);
//             } catch (error) {
//               console.error('Error adding products:', error);
//             }
//           };
//           addProductsToServer(inpval);

//     }

//     return (
//         <>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Sign Up</h3>
//                         <Form >
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control onChange={getdata} name='date' type="date" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
//                     </div>
//                     <div>
//                     <SIgn_img />
//                     </div>
                    
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     )
// }

// export default Home

// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import SIgnImg from './SIgnImg';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const Home = () => {
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const addData = async (e) => {
        e.preventDefault();
        const { name, email, date, password } = inpval;

        if (!name.trim() || !email.trim() || !date.trim() || !password.trim()) {
            toast.error('All fields are required!', {
                position: "top-center",
            });
            return;
        }

        if (!email.includes("@")) {
            toast.error('Please enter a valid email address', {
                position: "top-center",
            });
            return;
        }

        if (password.length < 5) {
            toast.error('Password must be at least 5 characters long', {
                position: "top-center",
            });
            return;
        }

        try {
            // Post data to server
            const response = await axios.post('https://example.com/users', inpval);
            console.log('Data added successfully:', response.data);
            // Save data to local storage
            const existingData = JSON.parse(localStorage.getItem("useryoutube")) || [];
            localStorage.setItem("useryoutube", JSON.stringify([...existingData, inpval]));
            // Redirect to login page
            history("/login");
        } catch (error) {
            console.error('Error adding data:', error);
            toast.error('An error occurred. Please try again later', {
                position: "top-center",
            });
        }
    };

    return (
        <div className="container mt-3">
            <section className='row' style={{ padding:"5%", display:"flex", justifyContent:"space-around" }}>
                <div className="col-lg-6 mt-3 p-3">
                    <h3 className='text-center'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="date" name='date' onChange={getdata} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className='w-100' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                </div>
                <div className="col-lg-6 mt-3">
                    <SIgn_img/>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Home;
