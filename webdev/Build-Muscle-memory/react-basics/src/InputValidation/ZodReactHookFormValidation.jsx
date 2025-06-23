import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {useForm} from "react-hook-form"
import * as z from "zod"

const ZodReactHookFormValidation = () => {
    const loginSchema = z.object({
        username : z.string().min(4,"name length must be atleast 4").max(8,"name length must not be more than 8"),
        email : z.string().email(),
        password : z.string().min(4,{message : "passowrd length must be atleast 4"}).max(8,{message : "passowrd length must be less than  8"})

    })

    const {register, handleSubmit, 
        formState : {errors}} = useForm({
        resolver : zodResolver(loginSchema)
    })

    function onSubmit(data){
        console.log(data)
    }

  return (
    <div>
        ZodReactHookFormValidation
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("username")}
                 type="text" placeholder='username' />
            {errors?.username && <span>{errors.username.message }</span>}

            <input 
                {...register("email")}
                type="email" placeholder='email' />
            {errors?.email && <span>{errors.email.message }</span>}

            <input 
                {...register("password")}
                type="password" placeholder='password' />
            {errors?.password && <span>{errors.password.message }</span>}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ZodReactHookFormValidation