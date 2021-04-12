import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  toggleImage = () => {
    this.setState(previousState => ({isActive: !previousState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.toggleImage}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqData} = this.props
    const {answerText} = faqData
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="paragraph">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqData} = this.props
    const {questionText} = faqData
    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
