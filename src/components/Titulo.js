import React from 'react'

export const Titulo = (props) => {
  return (
    <div id="titulo">
        <h1 class="text-6xl pt-10 font-bold">{props.party.name}</h1>
        <h2 class="my-2 text-3xl font-medium text-gray-400">{props.party.description}</h2>
        <p class="text-xl animate-pulse">+18</p>

    </div>
  )
}

export default Titulo

