import './index.css'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => (
  <div className="bg-container-footer">
    <div className="footer">
      <h1 className="covid19-text">
        COVID19
        <span className="india-text">INDIA</span>
      </h1>
      <p className="description">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-icons-container">
        <VscGithubAlt className="footer-icon" />
        <FiInstagram className="footer-icon" />
        <FaTwitter className="footer-icon" />
      </div>
    </div>
  </div>
)
export default Footer
