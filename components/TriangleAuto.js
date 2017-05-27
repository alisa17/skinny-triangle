import React from 'react';

class TriangleAuto extends React.Component {
    constructor(props) {
        super(props);
        const colours = ['red', 'green', 'blue', 'yellow']
        this.colour = colours[Math.floor(Math.random() * colours.length)]
        this.state = {alive:false}


        setTimeout(() => this.setState({alive: true}), Math.random()*2000)
    }


    render() {
        const {level, minX, maxX, minY, maxY} = this.props.data
        let alive = this.state.alive
        return (
            <g>
                <polygon alive ={alive} className="trig" fill={this.colour} points={getPoints(minX, maxX, minY, maxY)}/>
                {getChildren(alive,level, minX, maxX, minY, maxY)}

            </g>
        );
    }
}

function getPoints(minX, maxX, minY, maxY) {
    const middleX = (minX + maxX) / 2
    return `${middleX} ${minY}, ${minX} ${maxY}, ${maxX} ${maxY}`
}


function getChild(key,level, minX, maxX, minY, maxY) {
    const  data = {level, minX, maxX, minY, maxY}
    return <TriangleAuto key = {key} data={data}/>
}

function getChildren(alive, level, minX, maxX, minY, maxY) {
    if (level >= 6 || !alive) {
        return [];
    }
    const nextLevel = level + 1
    const middleX = (minX + maxX) / 2;
    const middleY = (minY + maxY) / 2;
    return [
        getChild(0,nextLevel, (minX + middleX) / 2, (middleX + maxX) / 2, minY, middleY),
        getChild(1,nextLevel, minX, middleX, middleY, maxY),
        getChild(2,nextLevel, middleX, maxX, middleY, maxY)
    ];
}

export default TriangleAuto
