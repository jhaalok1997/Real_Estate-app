import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {account} from "./appwrite/AppwriteConfig.jsx";
import {v4 as V4uuid} from "uuid"
import {useNavigate} from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()
  const [user,setUser] = useState({
       Username:"",
       email:"",
       password:""

  })

      const signupUser = async (e) => {
        e.preventDefault()

        const promise = account.create(
          V4uuid(),
          user.Username,
          user.email,
          user.password
        );
         
        promise.then(
          function(response){
                console.log(response) 
                navigate("/Home") // route where land after signup
          },
          function(error){
            console.log(error);
          } 
        )

      }


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      console.log(data);
    };

  return (
    
        <div className="bg-black h-[60vh] w-96 p-5 text-center m-10 rounded-xl lg:w-[50vw]">
      <h2 className="font-serif text-2xl text-white">Sign up</h2>

      <form className=" text-white h-[50vh] pt-8 flex flex-col " onSubmit={handleSubmit(onSubmit)}>

         <div className="mr-11 space-y-5">
          <label className="mr-2">Username: </label>
          <input className="p-2 rounded-lg font-serif text-black" type="text" onChange={(e) => {setUser({...user,Username:e.target.value})}}{...register('userName', { required: true })} /><br/>
          {errors.userName && <span>This field is required</span>}
        </div>

        <div className="mr-2 space-y-5">
          <label className="mr-1">Email: </label>
          <input className="p-2 rounded-lg font-serif text-black" type="email"  onChange={(e) => {setUser({...user,email:e.target.value})}} {...register('email', { required: true })} /><br/>
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="space-y-5 mr-6">
          <label>Password: </label>
          <input className="p-2 rounded-lg font-serif text-black" type="password"  onChange={(e) => {setUser({...user, password:e.target.value})}} {...register('password', { required: true })} /><br/>
          {errors.password && <span>This field is required</span>}
        </div>

        <button className="bg-white p-1 rounded-full m-10 text-black font-serif" type="submit" onClick={signupUser}>Sign up</button>

      </form>

    </div>
    
  )
}

export default Signup