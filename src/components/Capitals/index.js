import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onClickCapitalCity = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )

    return activeCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="bg-container">
        <div className="country-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              value={activeId}
              onChange={this.onClickCapitalCity}
              className="select"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
