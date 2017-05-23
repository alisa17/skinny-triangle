import React from 'react'
import request from 'superagent'


function apiTest(e) {
  console.log(e.target.value);
  request
  .get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${e.target.value}`)
  .set("X-Mashape-Key", "SHDz9hkqOdmshlSbvbd9mE8NKgIbp16VffgjsnpUwYGBHTNsD7")
  .set("Accept", "text/plain")
  .end(function(err, result) {
    console.log({result});
    console.log(result.status, result.headers, result.body);
  });
}

const App = () => (
  <div className="container">
    <input type="text" onChange={(e) => apiTest(e)}/>
  </div>
)

export default App
