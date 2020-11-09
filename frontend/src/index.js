import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* 
https://torre.bio/api/bios/$username (gets bio information of $username)
- GET https://torre.co/api/opportunities/$id (gets job information of $id)
- POST https://search.torre.co/opportunities/_search/?[offset=$offset&size=$size&aggregate=$aggregate] and https://search.torre.co/people/_search/?[offset=$offset&size=$size&aggregate=$aggregate]  */