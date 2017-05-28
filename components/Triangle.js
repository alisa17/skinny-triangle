import React from 'react';

class Triangle extends React.Component {
    constructor(props) {
        super(props);
        const colours = ['red', 'green', 'blue', 'yellow']
        this.colour = colours[Math.floor(Math.random() * colours.length)]

        this.state ={alive: false}

        if (this.props.auto) {setTimeout(() => this.setState({alive: true}), Math.random()*2000)}
    }

    render() {
        const {level, maxLevel, minX, maxX, minY, maxY} = this.props.data
        let alive = this.state.alive
        let auto = this.props.auto
        return (
            <g>
                <polygon className="trig" auto={auto} alive={alive} fill={this.colour} points={getPoints(minX, maxX, minY, maxY)}/>
                {getChildren(auto, alive, level, maxLevel, minX, maxX, minY, maxY)}

            </g>
        );
    }
}

function getPoints(minX, maxX, minY, maxY) {
    const middleX = (minX + maxX) / 2
    return `${middleX} ${minY}, ${minX} ${maxY}, ${maxX} ${maxY}`
}


function getChild(key, level, maxLevel, minX, maxX, minY, maxY) {
    const data = {level, maxLevel, minX, maxX, minY, maxY}
    return <Triangle key={key} data={data}/>
}

function getChildren(auto, alive, level, maxLevel, minX, maxX, minY, maxY) {

if (auto) {
      if (alive) {
        const nextLevel = level + 1
        const middleX = (minX + maxX) / 2;
        const middleY = (minY + maxY) / 2;
        return [
            getChild(0,nextLevel, maxLevel, (minX + middleX) / 2, (middleX + maxX) / 2, minY, middleY),
            getChild(1,nextLevel, maxLevel, minX, middleX, middleY, maxY),
            getChild(2,nextLevel, maxLevel, middleX, maxX, middleY, maxY)
        ]
      }

      else {return []}
}

  else if (level >= maxLevel) {
      return [];
  }
  const nextLevel = level + 1
  const middleX = (minX + maxX) / 2;
  const middleY = (minY + maxY) / 2;
  return [
      getChild(0,nextLevel, maxLevel, (minX + middleX) / 2, (middleX + maxX) / 2, minY, middleY),
      getChild(1,nextLevel, maxLevel, minX, middleX, middleY, maxY),
      getChild(2,nextLevel, maxLevel, middleX, maxX, middleY, maxY)
  ]


}

export default Triangle
