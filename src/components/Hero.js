import React from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

export const Hero = () => {
  return (
    <div class="bg-[url(https://admin.tqr.la/storage/uvcxqpV7PlhU6VJpITYLWUkfOaQijoNhpXrYWx5z.jpg)]
                h-screen bg-cover bg-center flex justify-center items-end ">
        <a href="#titulo" class="group flex w-1/3"><BsChevronCompactDown size={60} class="grow text-gray-200/50 my-10 animate-bounce group-focus:text-gray-200 transition"/></a>
    </div>
  )
}

export default Hero