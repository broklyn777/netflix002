import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
        <Image src="https://rb.gy/ek4j9f" layout="fill" objectFit="contain" />
      </div>

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Logga in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="E-post"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-sm  text-orange-500">
                Ange en giltig e-postadress.{' '}
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Lösenord"
              className="input"
            />
            {errors.password && (
              <p className="text-sm  text-orange-500">
                Ditt lösenord måste innehålla mellan 4 och 60 tecken.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
          type="submit"
        >
          Logga in
        </button>
        <div className="text-[gray]">
          Ny på Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Registrera dig nu
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
