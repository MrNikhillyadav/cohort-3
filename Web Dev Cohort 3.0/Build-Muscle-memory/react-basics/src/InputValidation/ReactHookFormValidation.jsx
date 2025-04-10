import React from 'react'
import { useForm } from 'react-hook-form'


const ReactHookFormValidation = () => {
    const  {register,handleSubmit, formState : {errors}} = useForm()

    function onSubmit(data){
        console.log(data)
    }

  return (
    <div>
        ReactHookFormValidation
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register("name",{
                    required: 'username is required',
                    minLength : {
                        value : 4,
                        message : "name length must be atleast 6"
                    }
                }
            )}
                 type="text" placeholder='username' />
            {errors.name && <div className='text-red-500'>{errors.name.message}</div>}

            <input 
                {...register("email", {
                    required:"email is required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email format',
                    },
                }
            )} 
                type="email" placeholder='email' />
            {errors.email && <div className='text-red-500'>{errors.email.message }</div>}


            <input 
                {...register("password",{
                    required: 'Password is required',
                    minLength : {
                        value : 5,
                        message : "password should be more than 5 letters"
                    }
                }
            )} 
                type="password" placeholder='password' />
            {errors.password && <div className='text-red-500'>{errors.password.message }</div>}

            <button type='submit' > Submit </button>
        </form>
    </div>
  )
}

export default ReactHookFormValidation