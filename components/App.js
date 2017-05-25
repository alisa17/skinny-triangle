import React from 'react'
import Triangle from './Triangle'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {maxLevel: 1}
  }

  increaseMaxLevel() {
        console.log(this.state);
          const newMaxLevel = this.state.maxLevel + 1;
          this.setState({maxLevel: newMaxLevel})
      }

      decreaseMaxLevel(){
            console.log(this.state);
              const newMaxLevel = this.state.maxLevel - 1;
              this.setState({maxLevel: newMaxLevel})
          }

  render() {
    const data = {
        level: 0,
        maxLevel: this.state.maxLevel,
        minX: 0,
        maxX: this.props.width,
        minY: 0,
        maxY: this.props.height
    };

    return (
        <div>
            <div>
                <svg width={this.props.width} height={this.props.height}>
                    <Triangle data={data}/>
                </svg>
            </div>
            <button onClick={()=>this.increaseMaxLevel()}> Level Up </button>
            <button onClick={()=>this.decreaseMaxLevel()}> Level Down </button>
            <button onClick={()=>this.decreaseMaxLevel()}> Auto </button>
        </div>
    )
  }

}


export default App
