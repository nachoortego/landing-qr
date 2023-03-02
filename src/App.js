import './index.css'
import Titulo from './components/Titulo.js' 
import Informacion from './components/Informacion';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Entrada from './components/Entrada';

export const Line = () => {
  return (
    <hr class="mx-16 my-6 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
  )
}

function App() {
  return (
    <div class="bg-[url(https://cdn.discordapp.com/attachments/699337460815102082/1080646801062907914/background-bios.jpg)]
                sm:bg-cover bg-repeat-y animate-ltr-vertical-infinite">
      <div class="font-mono text-emerald-400 text-center
                  flex flex-col justify-center backdrop-brightness-[0.3]">
        <Titulo/>
        <Line/>
        <Informacion/>
        <Line/>
        <Entrada/>
        <Line/>
        <h1 class="text-xl mx-10 text-white">Completá este formulario para descargar tu entrada QR</h1>
        <Formulario/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
