import headerBackground from '../../resources/images/header-background.png'
import './header.css'

export const Header = () => {
  /** Renderer */
  return (
    <div className="header">
      <img
        className="header-background"
        src={headerBackground}
        alt="Header Background"
      />
    </div>
  )
}
