import React, { useState, useEffect } from 'react';
import './index.css'
import Titulo from './components/Titulo' 
import Informacion from './components/Informacion';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Entrada from './components/Entrada';
import Token from './components/qrtoken';
import QrOrForm from './components/QrOrForm';
import axios from 'axios';



export const Line = () => {
  return (
    <hr class="mx-16 my-6 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
  )
}


function App() {

  const [data, setData] = useState(null); // State to store the fetched data
  let props, ok;
  const token = window.location.pathname.split('/verif/')[1];
  console.log(token);
  // Function to fetch data when a button is clicked
  
  useEffect(() => {
    axios.get(`http://localhost/api/verif/${token}`)
      .then(response => {
      setData(response.data);
      ok = true;
      })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [ok]);

  props = data;
  console.log("props");
  console.log(props);
  //let props = data;


    
  if(props) {

    return (
      <div >
        <div class="font-poppins text-gray-200 text-center
                  bg-gradient-to-b from-black via-gray-900 to-gray-800
                  flex flex-col justify-center">
            <Titulo party={props.party}/>
            <Line/>
            <Informacion party={props.party} />
            <Line/>
            <Entrada party={props.party}/>
            
            <Line/>
            <QrOrForm link={props.link} qr_code={props.qr_code} participants={props.participants} _token={props._token}/>
            <Footer/>
        </div>
      </div>
    );
  } else 
    return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;