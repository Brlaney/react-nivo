import React from 'react';
import ChordGraph from './components/ChordGraph'
// import Carousel from './components/Carousel';
import './scss/App.scss';
import { data } from './lib/data/chord'


function App() {
  return (
    <div className='App'>
      <div
        id='container'
        className='uk-flex uk-flex-middle uk-flex-column uk-text-center'
      >
        <div id='chart-container' className='uk-card uk-card-default uk-card-body'>
          <div id='grid' className='uk-grid-small uk-child-width-expand@s uk-text-center' uk-grid>

            {/* Grid card 1 */}
            <div id='parent'>
              <div id='graph-container' className='uk-card uk-card-default uk-card-body'>
                <ChordGraph data={data} />
              </div>
            </div>

            {/* Grid card 2 */}
            <div id='parent'>
              <div id='graph-container' className='uk-card uk-card-default uk-card-body'>
                More charts
              </div>
            </div>

            {/* Grid card 3 */}
            <div id='parent'>
              <div id='graph-container' className='uk-card uk-card-default uk-card-body'>
                More charts
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
