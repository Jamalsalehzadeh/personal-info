import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import './web-site.css'

export const Website = () => {
  return (
    <div className="website">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
