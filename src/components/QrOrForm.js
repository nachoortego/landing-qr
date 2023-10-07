import Token from './qrtoken';
import React from 'react';
import Formulario from './Formulario';

export const Line = () => {
  return (
    <hr class="mx-16 my-6 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
  )
}

export const QrOrForm = (props) => {

  //console.log(props);
  if(props.link.qrs_generated == props.link.quantity) {
    return (
      <>
      <Token link={props.link} qr_code={props.qr_code} participants={props.participants}/>
      <Line/>
      </>
    );
  } else if(props.link.qrs_generated < props.link.quantity  && props.link.qrs_generated != 0) {
    return (
      <>
      <Token link={props.link} qr_code={props.qr_code} participants={props.participants}/>
      <Line/>
      <h1 class="text-xl mx-10 text-white">Completá este formulario para obtener tu entrada QR</h1>
      <h1 class="text-xl mx-10 text-white">Fill in this form to get your QR ticket</h1>
      <Formulario _token={props._token} link={props.link} />
      
      </>
    );
  } else {
    return(
      <>
      <h1 class="text-xl mx-10 text-white">Registered Guests with this link - Asistentes registrados con este link: {props.link.qrs_generated} / {props.link.quantity}</h1>
      <Line />
      <h1 class="text-xl mx-10 text-white">Completá este formulario para descargar tu entrada QR</h1>
      <h1 class="text-xl mx-10 text-white">Fill in this form to get your QR ticket</h1>
      <Formulario _token={props._token} link={props.link} />
      </>
    );
  }
}


export default QrOrForm