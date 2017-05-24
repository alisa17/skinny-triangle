import React from 'react'
import request from 'superagent'
import UrbanApi from './urbanApi'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      searchTerm: ''
    }
  }

  updateResults(value) {
    this.apiTest(value, (result) => {
      console.log(result.body.list);
      this.setState({
        results: result.body.list || [],
        searchTerm: value
      })
    })
  }

  apiTest(value, callback) {
    //console.log(e.target.value);
    request.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${value}`).set("X-Mashape-Key", "SHDz9hkqOdmshlSbvbd9mE8NKgIbp16VffgjsnpUwYGBHTNsD7").set("Accept", "text/plain").end(function(err, result) {
      //console.log(result.body.list[0]);
      callback(result)
    });
  }

  render() {
    return <div className="container">
      <p>Enter Word:</p>
      <input type="text" onChange={(e) => this.updateResults(e.target.value)}/>
      <UrbanApi results={this.state.results} searchTerm={this.state.searchTerm}></UrbanApi>

    </div>
  }

}

export default App
