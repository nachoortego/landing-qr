import React from 'react'

export const Item = ({icon,info}) => {
  return (
    <div class="mx-10 my-6 text-xl">
      <div class="flex gap-3 items-center font-medium">
        <span class="material-symbols-rounded text-5xl">{icon}</span>
        <h1 class="text-white">{info}</h1>
      </div>
    </div>
  )
}

export const Informacion = (props) => {
  return (
    <div class="flex justify-center my-4">
      <div class="sm:w-2/3 lg:w-1/2 xl:w-1/3">
        <Item icon={'event'} info={props.party.date}/>
        <Item icon={'schedule'} info={props.party.open_doors}/>
        <Item icon={'distance'} info={props.party.location}/>
      </div>
    </div>
  )
}


export default Informacion
