
import React from 'react'
import { useState } from "react";

export const Line = () => {
  return (
    <hr class="mx-16 my-6 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
  )
}

export const Input = ({placeholder,icon,type,name, min, max,handleChange}) => {

  return (
    <div class="group flex my-5 mx-10 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition-all rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input name={name} type={type} min={min} max={max} id="search" class="grow bg-transparent border-none w-full margin-none outline-none text-lg transition-all" placeholder={placeholder} required/>
    </div>
  )  
}

export const Date = ({placeholder,icon,name,handleChange}) => {
  return (
    <div class="group flex justify-start my-5 mx-10 bg-white/10 hover:bg-white/20 transition-all rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input name={name} type="text" id="search"         
              onFocus={(e) => (e.target.type = "date")} 
              onBlur={(e) => (e.target.type = "text")} 
              class="grow bg-transparent outline-none text-lg transition-all" placeholder={placeholder} />
    </div>
  )
}

export const Dropdown = ({name, handleChange}) => {
  return (
    <div class="flex justify-center my-5 mx-10 bg-white/10 rounded p-5 gap-3 hover:bg-white/20 transition-all sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">transgender</span>
      <select name={name} id="large" class="block w-full outline-none border-none text-gray-400 bg-transparent text-lg focus:bg-gray-600 cursor-pointer">
        <option selected>Genero / Gender</option>
        <option value="Fem">Femenino / Feminine</option>
        <option value="Mas">Masculino / Masculine</option>
        <option value="NB">Otro / Other - Prefer not to say</option>
      </select>
  </div>
  )
}

export const Formulario = (props) => {


  const inputs = [];
  const token = window.location.pathname.split('/verif/')[1];
  const formAction = `http://localhost/api/verif/${token}`;
  const formElement = document.getElementById('sendForm');
  if (formElement) {
    formElement.action = formAction;
  }
 
    inputs.push(
        <>
        <Input name={`name`} placeholder={'Nombre completo / Full name'} icon={'person'} type={'name'}/>
        <Input name={`date`} placeholder={'Año de nacimiento / Birthdate year'} max="2020" min="1900" icon={'event_available'} type={'number'}  />
        <Input name={`dni`} placeholder={'DNI / Identification number'} icon={'contact_emergency'} type={'number'}/>
        <Dropdown name={`gender`} />
        <Input name={`tel`} placeholder={'Telefono / Phone number'} icon={'smartphone'} type={'number'}/>
        <Input name={`email`} placeholder={'Email'} icon={'email'} type={'email'}/>
      <Line />
        </>
    );
  

  return (
    <form  id="sendForm" class="flex flex-col justify-center sm:items-center" method="post">
      <input class="hidden" tipe="hidden" name="_token" value={props._token}></input>
      {inputs}
      <button  type="submit" class="text-lg font-medium p-5 bg-white/30 grow mx-10 my-5 rounded sm:w-2/3 lg:w-1/2 hover:bg-white/50 transition-all">Enviar</button>
    </form>
  )
}

export default Formulario
