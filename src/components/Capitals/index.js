import {Component} from 'react'

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
  state = {capital: countryAndCapitalsList[0].id}

  onClickUpdateCapital = event => {
    this.setState({capital: event.target.value})
  }

  onCapitalCountry = () => {
    const {capital} = this.state
    const searchCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capital,
    )
    console.log(searchCountry)
    return searchCountry.country
  }

  render() {
    const {capital} = this.state
    console.log(capital)
    const countryCapital = this.onCapitalCountry(capital)

    return (
      <div className="container1">
        <div className="capitalCountry">
          <h1>Countries And Capitals</h1>
          <select onClick={this.onClickUpdateCapital}>
            {countryAndCapitalsList.map(eachlist => (
              <option key={eachlist.id} value={eachlist.id}>
                {eachlist.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <h1>{countryCapital}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
