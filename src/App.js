import React from 'react';
import {Filters} from './components/Filters/filters';
import { filtersConnector } from "./connectors/filters";
import './App.css';

const FiltersWithProps = filtersConnector(Filters);

function App() {
  return (
    <div className="App">
      <FiltersWithProps />
    </div>
  );
}

export default App;
