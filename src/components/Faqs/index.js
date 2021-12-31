import './index.css'

const Faqs = props => {
  const {faqDetails} = props
  const {answer, question} = faqDetails

  return (
    <ul className="ul-list-container" testid="faqsUnorderedList">
      <li testid="faqsUnorderedList" className="question">
        {question}
      </li>
      <li testid="faqsUnorderedList" className="answer">
        {answer}
      </li>
    </ul>
  )
}

export default Faqs
