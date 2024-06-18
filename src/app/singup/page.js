import SingupComponent from './components/SingupComponent'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Singup',
}

function Page() {
  return (
    <>
      <Toaster />
      <SingupComponent />
    </>
  )
}

export default Page
