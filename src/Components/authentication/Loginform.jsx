import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Login = () => {
    const [clear,setClear]=useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };


  return (
    <div>

         <div className="bg-black h-[60vh] w-96 text-center p-5 m-10 rounded-xl lg:w-[50vw]">
      <h2 className="text-white font-serif text-xl lg:text-3xl">Login</h2>
      <form className="text-white h-[50vh] pt-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className=" space-y-5">
          <label>Email: </label>
          <input className="p-2 rounded-lg font-serif text-black" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="mr-6 space-y-5">
          <label>Password: </label>
          <input className="p-2 rounded-lg font-serif text-black"  type="password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button className="bg-white p-2 rounded-full m-14 text-black font-serif" type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login;