import React from 'react'
import { ImTicket } from 'react-icons/im'

export const Entrada = () => {
  return (
    <div class="text-center mx-10">
        <ImTicket size={140} class="text-gray-200/90 mx-auto my-5"/>
        <h1 class="font-semibold text-2xl my-2">Entradas generales</h1>
        <h2 class="my-2 text-2xl font-medium">$2000</h2>
        <h3 class="text-white my-2 text-lg">Ticket válido desde 23:00 HS hasta 1:30 HS</h3>
    </div>
  )
}

export default Entrada