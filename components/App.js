import React from 'react'
import Triangle from './Triangle'

class App extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const data = {
        minX: 0,
        maxX: this.props.width,
        minY: 0,
        maxY: this.props.height
    };
      console.log(data)
    return (

        <div>
            <div>
                <svg width={this.props.width} height={this.props.height}>
                    <Triangle data={data}/>
                </svg>
            </div>
            <button>Increase maxLevel</button>
        </div>
    );
  }

}

export default App
