import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './styles/StyleReset.css'
import './styles/index.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
);
