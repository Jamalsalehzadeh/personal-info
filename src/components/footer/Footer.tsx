import { GmailSvgIcon } from '../../resources/icons/GmailSvgIcon'
import { LinkedInSvgIcon } from '../../resources/icons/LinkedInSvgIcon'
import { TelegramSvgIcon } from '../../resources/icons/TelegramSvgIcon'
import { WhatsAppSvgIcon } from '../../resources/icons/WhatsAppSvgIcon'
import './footer.css'

export const Footer = () => {
  /** Renderer */
  return (
    <div className="footer">
      <div className="footer-contactTypeSection">
        <div className="footer-contactTypeSection-icon">
          <GmailSvgIcon width={36} height={36} />
        </div>
        <div className="footer-contactTypeSection-description">
          <span className="footer-contactTypeSection-description-text">
            <a
              href="mailto:salehzadeh.jamal@gmail.com"
              title="salehzadeh.jamal@gmail.com"
            >
              salehzadeh.jamal@gmail.com
            </a>
          </span>
        </div>
      </div>
      <div className="footer-contactTypeSection">
        <div className="footer-contactTypeSection-icon">
          <LinkedInSvgIcon width={36} height={36} />
        </div>
        <div className="footer-contactTypeSection-description">
          <span className="footer-contactTypeSection-description-text">
            <a
              href="https://www.linkedin.com/in/jamal-salehzadeh-a27284b1/"
              target="_blank"
            >
              Linked-In
            </a>
          </span>
        </div>
      </div>
      <div className="footer-contactTypeSection">
        <div className="footer-contactTypeSection-icon">
          <TelegramSvgIcon width={36} height={36} />
          <WhatsAppSvgIcon width={36} height={36} />
        </div>
        <div className="footer-contactTypeSection-description">
          <span className="footer-contactTypeSection-description-text">
            <a href="tel:+989387654455">+98-938-765-4455</a>
          </span>
        </div>
      </div>
    </div>
  )
}
