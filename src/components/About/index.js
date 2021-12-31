import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import Faqs from '../Faqs'

import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class About extends Component {
  state = {
    faqsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'

    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.setState({faqsList: data.faq, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {faqsList} = this.state

    return (
      <div>
        <Header />
        <div testid="faqsUnorderedList" className="about-container">
          <h1 className="text">About</h1>
          <p className="date">Last update on march 28th 2021.</p>
          <p className="faq-heading">
            COVID-19 vaccines be ready for distribution
          </p>
          <ul testid="faqsUnorderedList" className="faqs-container">
            {faqsList.map(eachFaq => (
              <Faqs key={eachFaq.qno} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    )
  }

  renderLoadingView = () => (
    <div testid="aboutRouteLoader">
      <Loader color="#ffffff" height={80} type="TailSpin" width={80} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something went wrong</p>
    </div>
  )

  renderViewsBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="about-container">
        {this.renderViewsBasedOnAPIStatus()}
      </div>
    )
  }
}
export default About
