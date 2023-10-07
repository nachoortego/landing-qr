import React from 'react'
import { ImTicket } from 'react-icons/im'

export const Entrada = (props) => {
  return (
    <div class="text-center mx-10">
        <ImTicket size={140} class="text-gray-200/90 mx-auto my-5"/>
        <h1 class="font-semibold text-2xl my-2">{props.party.ticket_type}</h1>
        <h2 class="my-2 text-2xl font-medium">${props.party.ticket_price}</h2>
        <h3 class="text-white my-2 text-lg">Ticket válido desde las {props.party.open_doors} hasta las {props.party.close_doors}</h3>
        <h3 class="text-white my-2 text-lg">Valid Ticket from {props.party.open_doors} until {props.party.close_doors}</h3>
    </div>
  )
}

export default Entrada