import './App.css';
import React, {Component} from 'react';
import catData from './cat_metadata.json';

function App() {
        return (
            <div className="App">
                <svg width={1000} height={1000}>
                    {catData.map((cat, i) => (
                        <circle
                            key={i}
                            cx={(i * 100) + 30}
                            cy="60"
                            r={cat.weight[0]}
                            style={{ fill: 'steelblue' }}
                        />
                    ))}
                </svg>
            </div>
        );
}

export default App;

