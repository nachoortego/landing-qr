import './index.css'
import Titulo from './components/Titulo.js' 
import Informacion from './components/Informacion';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Entrada from './components/Entrada';

export const Line = () => {
  return (
    <hr class="mx-16 my-8 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
  )
}

function App() {
  return (
    <div>
      <div class="block md:hidden">
        <Hero/>
      </div>
      <div class="font-poppins text-gray-200 text-center
                  bg-gradient-to-b from-black via-gray-900 to-gray-800
                  flex flex-col justify-center">
        <Titulo/>
        <Line/>
        <Informacion/>
        <Line/>
        <Entrada/>
        <Line/>
        <h1 class="text-xl mx-10">Completá este formulario para descargar tu entrada QR</h1>
        <Formulario/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
