import React from 'react'

export const Input = ({placeholder,icon,type}) => {
  return (
    <div class="group flex my-5 mx-10 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition-all rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input type={type} id="search" class="grow bg-transparent outline-none text-lg transition-all" placeholder={placeholder} required/>
    </div>
  )  
}

export const Date = ({placeholder,icon}) => {
  return (
    <div class="group flex justify-start my-5 mx-10 bg-white/10 hover:bg-white/20 transition-all rounded p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input type="text" id="search"         
              onFocus={(e) => (e.target.type = "date")} 
              onBlur={(e) => (e.target.type = "text")} 
              class="grow bg-transparent outline-none text-lg transition-all" placeholder={placeholder} required/>
    </div>
  )  
}

export const Dropdown = () => {
  return (
    <div class="flex justify-center my-5 mx-10 bg-white/10 rounded p-5 gap-3 hover:bg-white/20 transition-all sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">transgender</span>
      <select id="large" class="block w-full outline-none text-gray-400 bg-transparent text-lg focus:bg-gray-600 cursor-pointer">
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
      <Date placeholder={'Fecha de nacimiento'} icon={'event_available'} type={'date'} special={"'(this.type='date'"} />
      <Input placeholder={'DNI'} icon={'contact_emergency'} type={'number'}/>
      <Dropdown/>
      <Input placeholder={'Telefono'} icon={'smartphone'} type={'number'}/>
      <Input placeholder={'Email'} icon={'email'} type={'email'}/>
      <button class="text-lg font-medium p-5 bg-white/30 grow mx-10 my-5 rounded sm:w-2/3 lg:w-1/2 hover:bg-white/50 transition-all">Enviar</button>
    </form>
  )
}

export default Formulario

