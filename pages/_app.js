import '../styles/globals.css'
import { UserProvider } from '../context/userContext'
import { interceptor } from "../settings/base"

interceptor()

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
