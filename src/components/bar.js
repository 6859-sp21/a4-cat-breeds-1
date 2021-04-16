import React, {useState} from "react";
import _ from 'lodash';

const allWidth = 300;
const orange = "#f2a84e";
const darktext = "#323232";

const Bar = ({
  category,
  height,
  width,
  clickFunction,
  isOn,
  highlight
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="bar"
      style={{
        height: height,
        width: width,
        background: (
          highlight ?
            orange:
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
  isOn,
  highlight
                    }) =>
{
  const [hover, setHover] = useState(false)
  return (
    <div
      className="text"
      style = {
        {
          background: (
        highlight ?
        orange :
        hover? "grey" :
        (isOn ? "grey": "lightgrey")
        ),
          width: width,
          color: (
            hover ? "white" :
              (isOn ? "white": darktext)
          )

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
                    title,
                    highlight
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
              height={(!highlight && isAllTrue) ? 0 : value}
              category={key}
              clickFunction={clickFunction}
              isOn={!isAllTrue && currentFilter[key]}
              width = {(allWidth+5) / Object.keys(data).length - 5}
              key={`bar${key}`}
              highlight={highlight ? _.includes(highlight, key) : false}
            />
            <TextButton
              category={key}
              clickFunction={clickFunction}
              isOn={!isAllTrue && currentFilter[key]}
              width = { (allWidth+5) / Object.keys(data).length - 5}
              key={`text${key}`}
              highlight={highlight ? _.includes(highlight, key) : false}
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
          )),
          color: (
            hover ? "white" :
              (isAllTrue ? "white": darktext)
          )
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}

      >
        All
      </div>
    </div>
  );
}

const TemperList = (
  {
    clickFunction,
    currentFilter,
    title,
    highlight
  }
) => {
  let isAllTrue = true;
  for (const key of Object.keys(currentFilter)) {
    if (!currentFilter[key]) {
      isAllTrue = false;
    }
  }
  console.log(highlight);
  const [hover, setHover] = useState(false)

  return (
    <div className="bar-chart">
      <div className="title">
        {title}
      </div>
      {_.map(currentFilter, (value, key) => {
        return (
          <div className="bar-and-text" key={key}>
            <TextButton
              category={key}
              clickFunction={clickFunction}
              isOn={!isAllTrue && currentFilter[key]}
              width = {(allWidth+5) / 2-5}
              key={`text${key}`}
              highlight={highlight ? _.includes(highlight, key) : false}
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
          )),
          color: (
            hover ? "white" :
              (isAllTrue ? "white": darktext)
          )
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        All
      </div>
    </div>
  )
}

export { TemperList };
export default BarChart;