import React from 'react';

class Triangle extends React.Component {
    constructor(props) {
        super(props);
        const colours = ['red', 'green', 'blue', 'yellow'];
        this.colour = colours[this.props.data.level % colours.length];
        //colours[Math.floor(Math.random() * colours.length)]
    }

    render() {
        const {level, maxLevel, minX, maxX, minY, maxY} = this.props.data;
        return (
            <g>
                <polygon className="trig" fill={this.colour} points={getPoints(minX, maxX, minY, maxY)}/>
                {getChildren(level, maxLevel, minX, maxX, minY, maxY)}

            </g>
        );
    }
}

function getPoints(minX, maxX, minY, maxY) {
    const middleX = (minX + maxX) / 2;
    return `${middleX} ${minY}, ${minX} ${maxY}, ${maxX} ${maxY}`;
}


function getChild(key, level, maxLevel, minX, maxX, minY, maxY) {
    const data = {level, maxLevel, minX, maxX, minY, maxY};
    return <Triangle key={key} data={data}/>;
}

function getChildren(level, maxLevel, minX, maxX, minY, maxY) {
    if (level >= maxLevel) {
        return [];
    }
    const nextLevel = level + 1;
    const middleX = (minX + maxX) / 2;
    const middleY = (minY + maxY) / 2;
    return [
        getChild(0, nextLevel, maxLevel, (minX + middleX) / 2, (middleX + maxX) / 2, minY, middleY),
        getChild(1, nextLevel, maxLevel, minX, middleX, middleY, maxY),
        getChild(2, nextLevel, maxLevel, middleX, maxX, middleY, maxY)
    ];
}

export default Triangle;
