import './App.css';
import React from 'react';
import catData from './cat_metadata.json';

function App() {
  return (
    <div>
      <div>
        {catData.map((cat) =>
            <div>
                <img src= {process.env.PUBLIC_URL + "/cat_pictures/" +cat.breed + '.jpg'} alt={cat.breed} />
            </div>)
        }
      </div>
    </div>
  );
}

export default App;

