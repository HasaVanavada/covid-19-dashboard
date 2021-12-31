import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://res.cloudinary.com/dksbysis7/image/upload/v1637760893/Group_7484_febup7.png"
        alt="not-found-pic"
      />
      <h1 className="page-not-found-text">PAGE NOT FOUND</h1>
      <p className="description">
        we are sorry, the page you requested could not be found
      </p>
      <p className="description">Please go back to the homepage</p>
      <Link to="/">
        <button type="button" className="home-button">
          Home
        </button>
      </Link>
    </div>
  </>
)
export default NotFound
