
import React from 'react'


export const Token = (props) => {
    console.log(JSON.stringify(props));
  return (
      <>
      <h1 class="text-xl mx-10 text-white">Registered Guests with this link - Asistentes registrados con este link: {props.link.qrs_generated} / {props.link.quantity}</h1>
      {Object.keys(props.participants).map((key) => (
          <>
        <h3 class="text-white my-2 text-lg hide">{props.participants[key].name} - {props.participants[key].dni}</h3>
        <div class="flex justify-center my-4 hide">
          <div class="sm:w-2/3 lg:w-1/2 xl:w-1/3  md:inline-flex justify-center align-center hide">
            <img class="hide" src={"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+props.participants[key].qr_token+"&chld=L|1"} ></img>
          </div>
        </div>
          </>
        
      ))}
      </>
  )
}


export default Token