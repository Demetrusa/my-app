import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HeaderBackground from './components/HeaderBackground';
import RegForm from './components/RegForm';
import Section from './components/Section';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
   <Header />
   <HeaderBackground />
   <Section />
   <RegForm />
  </React.StrictMode>,
  document.getElementById('root')
);

