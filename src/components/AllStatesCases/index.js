import {Link} from 'react-router-dom'
import './index.css'

const AllStatesCases = props => {
  const {stateList} = props
  const {
    stateCode,
    stateName,
    listOfConfirmed,
    listOfRecovered,
    listOfOther,
    listOfDeceased,
    listOfPopulation,
  } = stateList
  const active =
    listOfConfirmed - listOfRecovered - listOfDeceased - listOfOther

  return (
    <li className="list-state-class">
      <Link to={`/state/${stateCode}`} className="link-class">
        <p className="state-name-class">{stateName}</p>
      </Link>
      <p className="state-confirmed">{listOfConfirmed.toLocaleString()}</p>
      <p className="state-active">{active.toLocaleString()}</p>
      <p className="state-recovered">{listOfRecovered.toLocaleString()}</p>
      <p className="state-deceased">{listOfDeceased.toLocaleString()}</p>
      <p className="state-population">{listOfPopulation.toLocaleString()}</p>
    </li>
  )
}

export default AllStatesCases
