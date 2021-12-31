import {Component} from 'react'
import './index.css'

class Total extends Component {
  render() {
    const {totalCountData1} = this.props
    const {confirmed, deceased, recovered} = totalCountData1

    console.log(confirmed)
    return (
      <li className="ul-list-container1">
        <p className="confirmed">{confirmed.toLocaleString()}</p>

        <p className="recovered">{recovered.toLocaleString()}</p>
        <p className="deceased">{deceased.toLocaleString()}</p>
      </li>
    )
  }
}

export default Total
