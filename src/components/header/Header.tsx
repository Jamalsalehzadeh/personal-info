import headerBackground from '../../resources/images/header-background.png'
import avatarImage from '../../resources/images/itisaram.png'
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
      <div className="header-imageContainer">
        <img
          className="header-imageContainer-avatar"
          src={avatarImage}
          alt="It Is Aram"
        />
      </div>
      <div className="header-descriptionContainer">
        <div className="header-descriptionContainer-description">
          <p className="header-text">Hey, my name is</p>
          <p
            className="header-text"
            style={{
              fontSize: '2rem',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            JAMAL
            <br />
            SALEHZADEH
          </p>
          <p className="header-text">Family and friends Call me</p>
          <p
            className="header-text"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#9f0000',
            }}
          >
            ARAM
          </p>
          <p className="header-text">
            I am a front end developer. Studied at Petroleum Engineering but I
            belong to codes not oils...
          </p>
          <p className="header-text">30 years old, happy and married.</p>
        </div>
      </div>
    </div>
  )
}
