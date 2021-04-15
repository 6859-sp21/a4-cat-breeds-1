import './App.css';
import React, {Component} from 'react';
import catData from './cat_metadata.json';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node
        // const dataMax = max(this.props.data)
        const dataMax = 16;
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .enter()
            .append('circle')

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .exit()
            .remove();

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('cx', d => d.weight[0] * 50)
            .attr('cy', d => 100)
            .attr('r', 5)
            .on('mouseover', function(d, i) {
                select(this)
                    .style('fill', 'grey')
            })
            .on('mouseout', function(d, i) {
                select(this)
                    .style('fill', 'orange');
            })
    }
    render() {
        return <svg ref={node => this.node = node}
                    width={1000} height={1000}>
        </svg>
    }
}

function App() {
        return (
            <div className="App">
                <BarChart data={catData} size={[500,300]} />
            </div>
        );
}

// class App extends Component {
//
//     state = {
//         data: [12, 5, 6, 6, 9, 10],
//         width: 700,
//         height: 500,
//         id: root
//     };
//
//   render() {
//     <div>
//         <BarChart data={this.state.data} width={this.state.width} height={this.state.height}/>
//       {/*<div>*/}
//       {/*  {catData.map((cat) =>*/}
//       {/*      <div>*/}
//       {/*          <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />*/}
//       {/*      </div>)*/}
//       {/*  }*/}
//       {/*</div>*/}
//     </div>
//   };
// }

export default App;

