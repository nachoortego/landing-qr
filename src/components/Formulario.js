import React from 'react'

export const Input = ({placeholder,icon,type}) => {
  return (
    <div class="focus-within:animate-pulse focus-within:border-4 group flex my-5 mx-10 bg-black/20 hover:bg-black/30 focus-within:bg-black/30 transition-all border-2 border-emerald-600 p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input type={type} id="search" class="grow bg-transparent outline-none placeholder:text-emerald-400 transition-all text-xl" placeholder={placeholder} required/>
    </div>
  )  
}

export const Date = ({placeholder,icon}) => {
  return (
    <div class="focus-within:animate-pulse focus-within:border-4 group flex justify-start my-5 mx-10 bg-black/20 hover:bg-black/30 transition-all border-2 border-emerald-600 p-5 gap-3 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">{icon}</span>
      <input type="text" id="search"         
              onFocus={(e) => (e.target.type = "date")} 
              onBlur={(e) => (e.target.type = "text")} 
              class="grow bg-transparent outline-none text-xl placeholder:text-emerald-400 transition-all" placeholder={placeholder} required/>
    </div>
  )  
}

export const Dropdown = () => {
  return (
    <div class="focus-within:animate-pulse focus-within:border-4 flex justify-center my-5 mx-10 bg-black/20 p-5 gap-3 hover:bg-black/30 transition-all border-2 border-emerald-600 sm:w-2/3 lg:w-1/2">
      <span class="material-symbols-rounded text-3xl">transgender</span>
      <select id="large" class="block w-full outline-none text-emerald-400 bg-transparent text-xl focus:bg-emerald-400 focus:text-black cursor-pointer">
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
      <button class="text-xl text-black font-medium p-5 bg-emerald-400 grow mx-10 my-5 sm:w-2/3 lg:w-1/2 hover:bg-black hover:border-2 hover:border-emerald-400 hover:text-white hover:font-boldplaceholder:text-emerald-400  transition-all">Enviar</button>
    </form>
  )
}

export default Formulario

