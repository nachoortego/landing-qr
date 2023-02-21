import './index.css'
import Titulo from './components/Titulo.js' 
import Informacion from './components/Informacion';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Entrada from './components/Entrada';

function App() {
  return (
    <div>
      <div class="block md:hidden">
        <Hero/>
      </div>
      <div class="font-poppins text-gray-200 text-center
                  bg-gradient-to-t from-gray-800 via-gray-800 to-black
                  flex flex-col justify-center">
        <Titulo/>
        <hr class="mx-16 my-8 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
        <Informacion/>
        <hr class="mx-16 my-8 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
        <Entrada/>
        <hr class="mx-16 my-8 sm:mx-auto sm:w-1/2 lg:w-1/3"/>
        <h1 class="text-xl mx-10">Completá este formulario para descargar tu entrada QR</h1>
        <Formulario/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
