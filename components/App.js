import React from 'react'
import Triangle from './Triangle'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {maxLevel: 0}
  }

  increaseMaxLevel() {
          const newMaxLevel = this.state.maxLevel + 1;
          this.setState({maxLevel: newMaxLevel})
      }

      decreaseMaxLevel(){
              const newMaxLevel = this.state.maxLevel - 1;
              this.setState({maxLevel: newMaxLevel})
          }
      reset(){
              this.setState({maxLevel: 0})
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
            <button onClick={()=>this.reset()}> Reset </button>
            <button onClick={()=>this.decreaseMaxLevel()}> Auto </button>
        </div>
    )
  }

}


export default App
