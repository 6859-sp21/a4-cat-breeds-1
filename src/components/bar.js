import React, {useState} from "react";
import _ from 'lodash';

const allWidth = 300;

const Bar = ({
    category,
    height,
    width,
    clickFunction,
    isOn
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="bar"
      style={{
        height: height,
        width: width,
        background: (
          hover? "grey" :
            (isOn ? "grey": "lightgrey")
        )
      }}
      onClick={() => clickFunction(category)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  )
};


const TextButton = ({
  category,
  width,
  clickFunction,
  isOn
                    }) =>
{
  const [hover, setHover] = useState(false)
  return (
    <div
      className="text"
      style = {
        {
          background: (
            hover? "grey" :
              (isOn ? "grey": "lightgrey")
          ),
          width: width
        }
      }
      onClick={() => clickFunction(category)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        {_.capitalize(category)}
      </div>
    </div>
  )
}



const BarChart = ({
                    data,
                    clickFunction,
                    currentFilter,
                    title
}) => {
  let isAllTrue = true;
  for (const key of Object.keys(data)) {
    if (!currentFilter[key]) {
      isAllTrue = false;
    }
  }

  const [hover, setHover] = useState(false)


  return (
    <div className="bar-chart">
      <div className="title">
        {title}
      </div>
      {_.map(data, (value, key) => {
        return (
          <div className="bar-and-text" key={key}>
            <Bar
              height={isAllTrue ? 0 : value}
              category={key}
              clickFunction={clickFunction}
              isOn={!isAllTrue && currentFilter[key]}
              width = {allWidth / Object.keys(data).length}
              key={`bar${key}`}
            />
            <TextButton
              category={key}
              clickFunction={clickFunction}
              isOn={!isAllTrue && currentFilter[key]}
              width = {allWidth / Object.keys(data).length}
              key={`text${key}`}
            />


          </div>
        )
      })}
      <div
        className="all-button"
        onClick={() => clickFunction("all")}
        style = {{
          width: `${allWidth}px`,
          background: ((
            hover? "grey" :
              (isAllTrue ? "grey": "lightgrey")
          ))
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        All
      </div>
    </div>
  );
}

export default BarChart;