import { useForm } from 'react-hook-form';

const Signup = () => {

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
          <input className="p-2 rounded-lg font-serif text-black" {...register('userName', { required: true })} /><br/>
          {errors.userName && <span>This field is required</span>}
        </div>
        <div className="mr-2 space-y-5">
          <label className="mr-1">Email: </label>
          <input className="p-2 rounded-lg font-serif text-black" {...register('email', { required: true })} /><br/>
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="space-y-5 mr-6">
          <label>Password: </label>
          <input className="p-2 rounded-lg font-serif text-black" type="password" {...register('password', { required: true })} /><br/>
          {errors.password && <span>This field is required</span>}
        </div>
        <button className="bg-white p-1 rounded-full m-10 text-black font-serif" type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Signup