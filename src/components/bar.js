import React, {useState} from "react";
import _ from 'lodash';



const Bar = ({ category, height, clickFunction, isOn }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="bar"
      style={{
        height: height,
        width: "50px",
        background: (
          hover? "orange" :
            (isOn ? "orange": "grey")
        )
      }}
      onClick={() => clickFunction(category)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  )
};

const BarChart = ({data, clickFunction, currentFilter}) => {
  return (
    <div className="bar-chart">
      {_.map(data, (value, key) => {
        return (
          <div className="bar-and-text" key={key}>
            <Bar
              height={value}
              category={key}
              clickFunction={clickFunction}
              isOn={currentFilter[key]}
              key={`bar${key}`}
            />
            <div
              className="text"
              key={`text${key}`}
            >
              {key}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default BarChart;