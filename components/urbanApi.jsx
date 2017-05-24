import React from 'react'

const urbanApi = props => {
  return <div>
    {props.searchTerm}

    {props.results.map((result) => {
      return <div>
        <li>{result.author}</li>
        <p>hello</p>

      </div>
    })}

  </div>

}

export default urbanApi
