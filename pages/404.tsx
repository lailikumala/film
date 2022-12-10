import { useRouter } from 'next/router';
import { useEffect } from 'react'

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }, [])
  return (
    <div className='my-20'>
      <h1 className='title-not-found text-2xl text-center font-bold text-grey'>Oooopsss</h1>
      <h1 className='title-not-found text-2xl text-center font-bold text-grey'>Page Not Found!</h1>
    </div>
  )
}

export default Custom404