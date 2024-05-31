import React , { useState } from 'react';
import Navbar from "./components/Navbar";
import Axios from 'axios';

function App() {
  // let options = {
  //   headers: {accept:'application/json'}
  // }
  // Axios.get('https://demo-blog.mashupstack.com/api/posts', options).then(request=> {
  //   console.log(request.data);
  // }).catch(error=>{
  //   console.log("ERROR");
  // })

  var data = {
    
    title: "Nothing to Worry",
    content:"lorem Ispum Ultimate",
  };
  var options = {
      headers: {'Accept':'application/json'},
  }
  Axios.post('https://demo-blog.mashupstack.com/api/posts',data,options).then(response=>{
      // statements to execute on success response from api endpoint
      console.log(response.data)
  }).catch(error=>{
      // statements to execute on error response from api endpoint
      console.log(error)
  })
  return(
  <div>
    <Navbar/>
    <p>Home component </p>
  </div>
  );
}

export default App;
