import React from 'react'
import { useEffect } from 'react'

export const Titulo = () => {
  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random()*150}px`
        let random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])

  return (
    <div class="flex flex-col items-center"id="titulo">
        <h1 className="text-emerald-400 text-8xl sm:text-9xl font-bold font-akira uppercase relative inline-block p-px mt-4">
          <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 #FFFF", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">bios</span> {/* glitch::before */}
          bios
          <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 spin(#FFFFF, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">bios</span> {/* glitch::after */}
        </h1>
        <h2 class="uppercase outline my-2 text-xl text-gray-400 font-medium font-akira w-fit px-3">despedida del verano</h2>
        <p class="text-xl text-white animate-pulse">+18</p>

    </div>
  )
}

export default Titulo

