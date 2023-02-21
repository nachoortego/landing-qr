import React from 'react'

export const Input = ({placeholder,icon,type}) => {
  return (
    <div class="flex justify-center my-5 mx-10 bg-white/10 rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input type={type} id="search" class="grow bg-transparent outline-none text-lg" placeholder={placeholder} required/>
    </div>
  )  
}

export const Dropdown = () => {
  return (
    <div class="flex justify-center my-5 mx-10 bg-white/10 rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">transgender</span>
      <select id="large" class="block w-full outline-none text-gray-400 bg-transparent text-lg focus:bg-gray-700">
        <option selected>Genero</option>
        <option value="Fem">Femenino</option>
        <option value="Mas">Masculino</option>
        <option value="NB">No binario</option>
      </select>
  </div>
  )
}

export const Formulario = () => {
  return (
    <form class="flex flex-col justify-center sm:items-center">
      <Input placeholder={'Nombre completo'} icon={'person'} type={'name'}/>
      <Input placeholder={'Fecha de nacimiento'} icon={'event_available'} type={'date'}/>
      <Input placeholder={'DNI'} icon={'contact_emergency'} type={'number'}/>
      <Dropdown/>
      <Input placeholder={'Telefono'} icon={'smartphone'} type={'number'}/>
      <Input placeholder={'Email'} icon={'email'} type={'email'}/>
      <button class="p-5 bg-white/30 grow mx-10 my-5 rounded sm:w-2/3 lg:w-1/2">Enviar</button>
    </form>
  )
}

export default Formulario

