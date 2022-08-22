
import React, { useEffect } from "react"
import Delivery from "./Delivery"
import Footer from "./Footer"
import Navbar from "./Navbar"
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import httpRequest from "utils/httpRequest"
import { setAuth } from "redux/Action/authAction"
import { useDispatch } from "react-redux"


const Login = () => {

    const dispatch = useDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm()
    const {register:register2,handleSubmit:handleSubmit2,formState:{errors:errors2}} = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        console.log(data);
        httpRequest.post("/login",{
            email:data.email,
            password :data.password,
        }
        ).then(res=>{
            //console.log(res.data.authorization.token);
             dispatch(setAuth({isAuth:true,token:res.data.data.authorization.token}))
            console.log(">>>>>>>>",res);
            navigate("/")
        })
    }
    const onSubmitFullForm = (data)=>{
        console.log(data);
        axios.post("http://d0ed-2405-201-300b-e015-a1eb-4ea6-e629-723f.ngrok.io/api/register",
        {
            name: data.firstName,
            email: data.email,
            password:data.password,
        }).then(res=>{console.log(res.data)}).catch(err=> {console.log(err)})
    }

    useEffect(()=>{
        if(Object.keys(errors === 0)){
            console.log("Your Form is Submited Successfully");
        }
    },[errors])

    
    return (
        <>
            <Navbar />
            <Delivery />
            <div className="container">
                <div className="mt-3 mb-4"> <span className="text-muted cp" onClick={()=>navigate("/")}> Home  | </span> Account</div>
                <div className="row">

                    <div className="col-md-5">
                        <h5 className="my-3 fw-bold">Login</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="exampleInput123">Email</label>
                                <input type="email" className="form-control border border-info" id="exampleInput123" aria-describedby="emailHelp" 
                                {...register("email",{required:true})} />
                                {errors.email?.type==="required" && <p className="text-danger">This field is Required</p> }
                                
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputPassword123">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword123" 
                                {...register("password",{required:true})}
                                />
                                {errors.password?.type==="required" && <p className="text-danger">This field is Required</p> }
                            </div>
                            <p>Forget Your Password?</p>
                            <button type="submit" className="newButton">Sign in</button>
                        </form>

                        <p className="my-5"><span className="fw-bold">Hey!</span> Welcome to our new website! Already a customer? Check your email inbox for an account activation link, or choose 'Create Account' with your existing account email address and we will sync up your old account for you!</p>
                    </div>



                    <div className="col-md-5 offset-md-2">
                        <h5 className="my-3 fw-bold">Create Account /Activate Existing Account</h5>
                        <form onSubmit={handleSubmit2(onSubmitFullForm)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstName">First Name</label>
                                <input type="text" className="form-control border border-info" id="exampleInputFirstName" aria-describedby="emailHelp"
                                {...register2("firstName",{required:true})}
                                />
                                {errors2.firstName?.type==="required" && <p className="text-danger">This field is Required</p> }
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputLastName1">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputLastName1"
                                {...register2("lastName",{required:true})}
                                />
                                {errors2.lastName?.type==="required" && <p className="text-danger">This Field is Required</p> }
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInput11">Email</label>
                                <input type="email" className="form-control border border-info" id="exampleInput11" aria-describedby="emailHelp" 
                                {...register2("email",{required:true})}
                                />
                                {errors2.email?.type==="required" && <p className="text-danger">This field is Required</p>}
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputPassword12">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword12" 
                                {...register2("password",{required:true})}
                                />
                                {errors2.password?.type==="required" && <p className="text-danger">This field is Required</p> }
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                                {...register2("check",{required:true})}
                                 />
                                 {errors2.check?.type==="required" && <p className="text-danger">Please Tick the Checkbox</p> }
                                <label className="form-check-label" htmlFor="exampleCheck1">Subscribe to stay updated with new products and offers!</label>
                            </div>
                            <button type="submit" className="newButton">Create</button>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-center fw-bold textLg" style={{ lineHeight: 2.5 }}>Do you have a pre-loved Beyond Retro piece that you're ready to part with? <br />
                            Login or create an account to sell your pre-loved items on Beyond Retro Marketplace</h5>
                        <p className="text-center text-muted mt-5 textLgp">Beyond Retro Marketplace Items are fulfilled by the Community</p>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Login