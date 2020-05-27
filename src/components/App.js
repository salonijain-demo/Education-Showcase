import React from 'react';
import '../styles/App.css';
import MainScreen from './MainScreen';
import EducationScreen from './EducationScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ModalProvider>
          <div className="App">
            <Route exact path='/' component={MainScreen} />
            <Route exact path='/education' component={EducationScreen} />
          </div>
        </ModalProvider>
      </Router>
    </Provider>
  );
}

export default App;
